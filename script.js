// script.js
import { db } from "./firebase.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// For now, hardcoded. Later: read from URL (?site=abc) or a config file.
const CURRENT_SITE_ID = "test-site-1";

const headlineEl = document.getElementById("hero-headline");
const subtextEl = document.getElementById("hero-subtext");
const buttonEl = document.getElementById("hero-button");
const statusEl = document.getElementById("hero-status");
const footerYearEl = document.getElementById("footer-year");

footerYearEl.textContent = new Date().getFullYear().toString();

function siteDocRef(siteId) {
  return doc(db, "sites", siteId);
}

async function loadHero() {
  statusEl.textContent = "Loading content…";

  try {
    const ref = siteDocRef(CURRENT_SITE_ID);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      statusEl.textContent = "";
      return; // use fallback text already in HTML
    }

    const data = snap.data();
    const hero = data.hero || {};

    const headline = (hero.headline || "").trim();
    const subtext = (hero.subtext || "").trim();
    const buttonText = (hero.buttonText || "").trim();

    if (headline) {
      headlineEl.textContent = headline;
    }
    if (subtext) {
      subtextEl.textContent = subtext;
    }
    if (buttonText) {
      buttonEl.textContent = buttonText;
    }

    statusEl.textContent = "";
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Could not load latest content.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHero();
});
