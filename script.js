// script.js (CLIENT TEST SITE, now draft/published-aware)
import { db } from "./firebase.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

console.log("client-site script.js loaded (draft/published)");

const CURRENT_SITE_ID = "test-site-1";

// Common footer year (Test Site uses footer-year)
const footerYearEl = document.getElementById("footer-year");
if (footerYearEl) {
  footerYearEl.textContent = new Date().getFullYear().toString();
}

// Grab elements if they exist on this page
const heroHeadlineEl = document.getElementById("hero-headline");
const heroSubtextEl = document.getElementById("hero-subtext");
const heroButtonEl = document.getElementById("hero-button");
const heroStatusEl = document.getElementById("hero-status");

const aboutHeadingEl = document.getElementById("about-heading");
const aboutBodyEl = document.getElementById("about-body");

const contactHeadingEl = document.getElementById("contact-heading");
const contactBodyEl = document.getElementById("contact-body");
const contactButtonEl = document.getElementById("contact-button");

function siteDocRef(siteId) {
  return doc(db, "sites", siteId);
}

/**
 * Decide which branch to use:
 * - ?mode=draft  → use data.draft.*
 * - otherwise    → use data.published.*
 */
function getContentBranch() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");
  return mode === "draft" ? "draft" : "published";
}

/**
 * Given the raw Firestore doc data, pick the right root object:
 * - Prefer data[branch] (draft or published)
 * - Fallback to data itself for backward compatibility
 */
function getContentRoot(data) {
  const branch = getContentBranch();
  if (data && typeof data === "object") {
    if (data[branch] && typeof data[branch] === "object") {
      return data[branch];
    }
    // Backwards-compat: if we don't have draft/published yet,
    // just treat the top level as the root.
    return data;
  }
  return {};
}

async function loadContent() {
  // If the page has none of the editable areas, skip Firestore
  if (!heroHeadlineEl && !aboutHeadingEl && !contactHeadingEl) {
    return;
  }

  if (heroStatusEl) {
    heroStatusEl.textContent = "Loading content…";
  }

  try {
    const ref = siteDocRef(CURRENT_SITE_ID);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      if (heroStatusEl) heroStatusEl.textContent = "";
      return;
    }

    const data = snap.data();
    const root = getContentRoot(data);

    // HERO (Home page)
    if (heroHeadlineEl || heroSubtextEl || heroButtonEl) {
      const hero = root.hero || {};
      const headline = (hero.headline || "").trim();
      const subtext = (hero.subtext || "").trim();
      const buttonText = (hero.buttonText || "").trim();

      if (heroHeadlineEl && headline) heroHeadlineEl.textContent = headline;
      if (heroSubtextEl && subtext) heroSubtextEl.textContent = subtext;
      if (heroButtonEl && buttonText) heroButtonEl.textContent = buttonText;
    }

    // ABOUT page
    if (aboutHeadingEl || aboutBodyEl) {
      const about = root.about || {};
      const ah = (about.heading || "").trim();
      const ab = (about.body || "").trim();

      if (aboutHeadingEl && ah) aboutHeadingEl.textContent = ah;
      if (aboutBodyEl && ab) aboutBodyEl.textContent = ab;
    }

    // CONTACT page
    if (contactHeadingEl || contactBodyEl || contactButtonEl) {
      const contact = root.contact || {};
      const ch = (contact.heading || "").trim();
      const cb = (contact.body || "").trim();
      const cbBtn = (contact.buttonText || "").trim();

      if (contactHeadingEl && ch) contactHeadingEl.textContent = ch;
      if (contactBodyEl && cb) contactBodyEl.textContent = cb;
      if (contactButtonEl && cbBtn) contactButtonEl.textContent = cbBtn;
    }

    if (heroStatusEl) heroStatusEl.textContent = "";
  } catch (err) {
    console.error("Error loading site content:", err);
    if (heroStatusEl) {
      heroStatusEl.textContent = "Could not load latest content.";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadContent();
});
