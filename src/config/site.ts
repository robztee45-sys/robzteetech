/**
 * Robztetech site settings.
 * Edit the values below to update your contact details and social links everywhere on the site.
 */
export const site = {
  name: "Robztetech",
  tagline: "Turning Ideas Into Visual Experiences.",
  description:
    "Robztetech is an AI-powered video production studio creating cinematic films, product commercials, AI UGC ads, 3D animation and social content for brands and creators.",
  // Where project inquiries are sent (opens the visitor's email app, pre-filled).
  email: "robztee45@gmail.com",
  // WhatsApp number in international format, digits only (used for the wa.me link).
  whatsapp: "2348149836368",
  whatsappDisplay: "+234 814 983 6368",
  links: {
    fiverr: "https://www.fiverr.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;
