export const homeSections = [
  {
    type: "hero",
    enabled: true,
    data: {
      heading: "Build beautiful client sites faster",
      subheading:
        "This starter is built to be reused, rebranded, and customized for different small business websites.",
      button1Text: "View Services",
      button1Link: "/services",
      button2Text: "Contact Us",
      button2Link: "/contact",
      button3Text: "See Events",
      button3Link: "/events",
      textAlignment: "left",
      height: "medium",
      backgroundImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
    }
  },

  {
    type: "media_text",
    enabled: true,
    data: {
      composition: "main-supporting",
      layout: "one-support-corner",
      content: {
        eyebrow: "Variation 1",
        heading: "Main image with one corner support photo",
        subheading: "Simple, flexible, and easy to reuse.",
        bodyText:
          "This is the cleanest version of the main-supporting layout. One large image leads the section, and one smaller supporting image adds interest without making it feel busy.",
        buttons: [
          { text: "Learn More", link: "/about", style: "primary" },
          { text: "View Services", link: "/services", style: "secondary" }
        ]
      },
      section: {
        size: "medium",
        imagePosition: "right",
        backgroundStyle: "light",
        textAlign: "left",
        verticalAlign: "center",
        contentWidth: "normal"
      },
      media: {
        photos: [
          {
            role: "main",
            src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
            alt: "Modern workspace"
          },
          {
            role: "support-1",
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
            alt: "Team collaboration detail"
          }
        ],
        radiusStyle: "soft"
      },
      styling: {
        centerFrame: {
          show: false,
          size: "small",
          colorToken: "accent",
          fill: "outline"
        },
        offsetFrame: {
          show: false,
          size: "small",
          colorToken: "primary",
          fill: "solid",
          vertical: "bottom",
          horizontal: "right"
        },
        detail: {
          show: false,
          colorToken: "surface-soft",
          size: "medium",
          fill: "solid"
        }
      }
    }
  },

  {
    type: "media_text",
    enabled: true,
    data: {
      composition: "main-supporting",
      layout: "two-support-corners",
      content: {
        eyebrow: "Variation 2",
        heading: "Main image with two supporting corner photos",
        subheading: "A more layered and editorial composition.",
        bodyText:
          "This version starts to feel more premium. The main image stays central while two supporting images help tell more of a story and make the layout feel more designed.",
        buttons: [
          { text: "Our Story", link: "/about", style: "primary" },
          { text: "Contact Us", link: "/contact", style: "secondary" }
        ]
      },
      section: {
        size: "large",
        imagePosition: "left",
        backgroundStyle: "none",
        textAlign: "left",
        verticalAlign: "center",
        contentWidth: "normal"
      },
      media: {
        photos: [
          {
            role: "main",
            src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
            alt: "Main editorial image"
          },
          {
            role: "support-1",
            src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
            alt: "Supporting image top left"
          },
          {
            role: "support-2",
            src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80",
            alt: "Supporting image bottom right"
          }
        ],
        radiusStyle: "soft"
      },
      styling: {
        centerFrame: {
          show: true,
          size: "small",
          colorToken: "accent",
          fill: "outline"
        },
        offsetFrame: {
          show: true,
          size: "small",
          colorToken: "primary",
          fill: "solid",
          vertical: "bottom",
          horizontal: "right"
        },
        detail: {
          show: false,
          colorToken: "surface-soft",
          size: "medium",
          fill: "solid"
        }
      }
    }
  },

  {
    type: "media_text",
    enabled: true,
    data: {
      composition: "main-supporting",
      layout: "three-support-corners",
      content: {
        eyebrow: "Variation 3",
        heading: "Main image with three supporting photos",
        subheading: "The most expressive version of the corner-based layout.",
        bodyText:
          "This gives you the richest main-supporting composition. It works well for storytelling sections where one hero image needs a few supporting moments around it.",
        buttons: [
          { text: "See More", link: "/services", style: "primary" },
          { text: "Visit Us", link: "/contact", style: "secondary" }
        ]
      },
      section: {
        size: "large",
        imagePosition: "right",
        backgroundStyle: "brand",
        textAlign: "left",
        verticalAlign: "center",
        contentWidth: "normal"
      },
      media: {
        photos: [
          {
            role: "main",
            src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
            alt: "Main fashion image"
          },
          {
            role: "support-1",
            src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
            alt: "Supporting image one"
          },
          {
            role: "support-2",
            src: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=900&q=80",
            alt: "Supporting image two"
          },
          {
            role: "support-3",
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
            alt: "Supporting image three"
          }
        ],
        radiusStyle: "round"
      },
      styling: {
        centerFrame: {
          show: true,
          size: "small",
          colorToken: "white",
          fill: "outline"
        },
        offsetFrame: {
          show: true,
          size: "small",
          colorToken: "accent",
          fill: "solid",
          vertical: "bottom",
          horizontal: "right"
        },
        detail: {
          show: true,
          colorToken: "surface-light",
          size: "medium",
          fill: "solid"
        }
      }
    }
  },

  {
    type: "media_text",
    enabled: true,
    data: {
      composition: "full-media",
      layout: "single",
      content: {
        eyebrow: "Variation 4",
        heading: "Single full-media image section",
        subheading: "A clean split with one dominant image.",
        bodyText:
          "This version is best when the photo deserves more visual weight. It stays cleaner than the main-supporting layouts and keeps styling minimal.",
        buttons: [
          { text: "Learn More", link: "/about", style: "primary" },
          { text: "Get Started", link: "/contact", style: "secondary" }
        ]
      },
      section: {
        size: "large",
        imagePosition: "left",
        backgroundStyle: "none",
        textAlign: "left",
        verticalAlign: "center",
        contentWidth: "normal"
      },
      media: {
        photos: [
          {
            role: "main",
            src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80",
            alt: "Large dramatic image"
          }
        ],
        radiusStyle: "none"
      },
      styling: {
        centerFrame: {
          show: false,
          size: "small",
          colorToken: "accent",
          fill: "outline"
        },
        offsetFrame: {
          show: false,
          size: "small",
          colorToken: "primary",
          fill: "solid",
          vertical: "bottom",
          horizontal: "right"
        },
        detail: {
          show: false,
          colorToken: "surface-soft",
          size: "medium",
          fill: "solid"
        }
      }
    }
  },

  {
    type: "media_text",
    enabled: true,
    data: {
      composition: "full-media",
      layout: "three-main-small-small",
      content: {
        eyebrow: "Variation 5",
        heading: "Full-media collage with one main and two supporting images",
        subheading: "A stronger image-led composition without extra styling layers.",
        bodyText:
          "This is a good option when you want multiple images to define the section. The layout itself creates the visual interest, so you do not need frames or decorative details.",
        buttons: [
          { text: "Explore", link: "/services", style: "primary" },
          { text: "Contact", link: "/contact", style: "secondary" }
        ]
      },
      section: {
        size: "large",
        imagePosition: "right",
        backgroundStyle: "light",
        textAlign: "left",
        verticalAlign: "center",
        contentWidth: "normal"
      },
      media: {
        photos: [
          {
            role: "main",
            src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
            alt: "Main landscape image"
          },
          {
            role: "support-1",
            src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80",
            alt: "Supporting image one"
          },
          {
            role: "support-2",
            src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
            alt: "Supporting image two"
          }
        ],
        radiusStyle: "soft"
      },
      styling: {
        centerFrame: {
          show: false,
          size: "small",
          colorToken: "accent",
          fill: "outline"
        },
        offsetFrame: {
          show: false,
          size: "small",
          colorToken: "primary",
          fill: "solid",
          vertical: "bottom",
          horizontal: "right"
        },
        detail: {
          show: false,
          colorToken: "surface-soft",
          size: "medium",
          fill: "solid"
        }
      }
    }
  },

  {
    type: "media_text",
    enabled: true,
    data: {
      composition: "photo-cards",
      layout: "three-row",
      content: {
        eyebrow: "Variation 6",
        heading: "Three photo cards in a clean row",
        subheading: "Contained, balanced, and easy to reuse across pages.",
        bodyText:
          "This is the most structured option. Instead of one dramatic composition, it uses a neat group of cards. It works well for services, spaces, menu highlights, or feature previews.",
        buttons: [
          { text: "See Services", link: "/services", style: "primary" },
          { text: "About Us", link: "/about", style: "secondary" }
        ]
      },
      section: {
        size: "medium",
        imagePosition: "left",
        backgroundStyle: "none",
        textAlign: "left",
        verticalAlign: "center",
        contentWidth: "normal"
      },
      media: {
        photos: [
          {
            role: "card-1",
            src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
            alt: "Card image one"
          },
          {
            role: "card-2",
            src: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=900&q=80",
            alt: "Card image two"
          },
          {
            role: "card-3",
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
            alt: "Card image three"
          }
        ],
        radiusStyle: "soft"
      },
      styling: {
        centerFrame: {
          show: false,
          size: "small",
          colorToken: "accent",
          fill: "outline"
        },
        offsetFrame: {
          show: false,
          size: "small",
          colorToken: "primary",
          fill: "solid",
          vertical: "bottom",
          horizontal: "right"
        },
        detail: {
          show: false,
          colorToken: "surface-soft",
          size: "medium",
          fill: "solid"
        }
      }
    }
  }
];