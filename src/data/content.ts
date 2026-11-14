import {
  Clapperboard,
  Cpu,
  Eye,
  Lightbulb,
  MessagesSquare,
  MonitorSmartphone,
  PenTool,
  Scissors,
  Send,
  Sparkles,
  Wand2,
  type LucideIcon,
} from "lucide-react";

export const processSteps = [
  {
    number: "01",
    title: "Concept Development",
    text: "Understanding the client's idea, objectives, audience, and desired visual style.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Creative Direction",
    text: "Developing the storyline, scenes, visual references, and video concepts.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "AI Production",
    text: "Using AI video generation and creative tools to bring the concept to life.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Editing & Refinement",
    text: "Improving transitions, sound, pacing, consistency, and overall presentation.",
    icon: Scissors,
  },
  {
    number: "05",
    title: "Final Delivery",
    text: "Delivering the completed video in the required format and aspect ratio.",
    icon: Send,
  },
] satisfies { number: string; title: string; text: string; icon: LucideIcon }[];

/** Tools used in production. These are tools I work with — not partnerships or certifications. */
export const tools = [
  { name: "Google Flow", role: "AI filmmaking & scene building" },
  { name: "Veo", role: "Text & image-to-video generation" },
  { name: "Kling AI", role: "Cinematic motion & character video" },
  { name: "HeyGen", role: "AI avatars & spokesperson video" },
  { name: "Image generators", role: "Concept art, keyframes & references" },
  { name: "Editing suites", role: "Cut, colour, sound & motion graphics" },
];

export const reasons = [
  {
    title: "Creative storytelling",
    text: "Every video starts with a story worth telling — not just pretty frames.",
    icon: Clapperboard,
  },
  {
    title: "Modern AI-powered production",
    text: "The latest AI video tools, guided by a director's eye, for faster turnarounds.",
    icon: Sparkles,
  },
  {
    title: "Attention to visual detail",
    text: "Consistent characters, clean motion, careful colour and pacing in every shot.",
    icon: Eye,
  },
  {
    title: "Customised video concepts",
    text: "No templates. Each concept is designed around your brand, product and audience.",
    icon: Wand2,
  },
  {
    title: "Professional communication",
    text: "Clear briefs, regular updates and on-time delivery from first call to final cut.",
    icon: MessagesSquare,
  },
  {
    title: "Tailored to every platform",
    text: "Delivered in the right length and aspect ratio for TikTok, Reels, YouTube or web.",
    icon: MonitorSmartphone,
  },
] satisfies { title: string; text: string; icon: LucideIcon }[];

/**
 * TESTIMONIALS — placeholders only.
 * Replace each entry with verified client feedback (quote, name, role/company).
 * Set `placeholder: false` once it's real so the "Placeholder" label disappears.
 */
export const testimonials = [
  {
    quote:
      "Your client's testimonial will appear here. Share what it was like to work together and the results the video delivered.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote:
      "Add a verified review from a brand or business you've produced a commercial or UGC campaign for.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    quote:
      "Add feedback from a creator or educator about a cinematic, animated or explainer project.",
    name: "Client Name",
    role: "Role, Company",
    placeholder: true,
  },
];

export const videoTypes = [
  "AI Commercial / Product Ad",
  "AI UGC Video",
  "Cinematic AI Video",
  "3D Animation / Character Video",
  "Minecraft Cinematic",
  "Social Media Content",
  "Educational / Explainer Video",
  "Other",
] as const;

export const budgetRanges = [
  "Under $100",
  "$100 – $300",
  "$300 – $750",
  "$750 – $1,500",
  "$1,500+",
  "Not sure yet",
] as const;
