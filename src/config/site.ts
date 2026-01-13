/**
 * Site Configuration
 * Central place for all site-wide constants, metadata, and configuration
 */

export const SITE_CONFIG = {
  // Brand Information
  brand: {
    name: 'Westone',
    tagline: 'We make interfaces',
    foundedYear: 2018,
  },

  // Hero Section
  hero: {
    description: "Since 2018, we've helped the most innovative startups and reputable brands design, build, and ship products worth talking about.",
    headline: {
      line1: 'We make',
      line2: 'interfaces',
    },
  },

  // Contact Information
  contact: {
    cta: 'Get In Touch',
    email: 'hello@westone.com',
    phone: '+1 (555) 123-4567',
  },

  // Social Media
  social: {
    twitter: 'https://twitter.com/westone',
    linkedin: 'https://linkedin.com/company/westone',
    instagram: 'https://instagram.com/westone',
    github: 'https://github.com/westone',
  },

  // UI Settings
  ui: {
    navbar: {
      menuButton: {
        open: 'Menu',
        close: 'Close',
      },
    },
    scrollThreshold: 50, // pixels before navbar transforms
  },

  // Responsive Breakpoints (matching Tailwind)
  breakpoints: {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
    wide: 1280,
  },
} as const;

// Animation Constants
export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },
  easings: {
    smooth: [0.22, 1, 0.36, 1],
    bounce: [0.25, 1, 0.5, 1],
    sharp: [0.16, 1, 0.3, 1],
  },
} as const;

// SEO & Metadata
export const SEO_CONFIG = {
  defaultTitle: 'Westone - We make interfaces',
  titleTemplate: '%s | Westone',
  description: "Since 2018, we've helped the most innovative startups and reputable brands design, build, and ship products worth talking about.",
  keywords: ['design', 'development', 'interfaces', 'web design', 'branding'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Westone',
  },
} as const;
