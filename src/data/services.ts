import commercial from "@/assets/work-product.jpg";
import ugc from "@/assets/work-ugc.jpg";
import cinematic from "@/assets/work-cinematic.jpg";
import animation from "@/assets/work-3d.jpg";
import social from "@/assets/service-social.jpg";
import education from "@/assets/work-education.jpg";

export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  image: string;
  examples: string[];
};

export const services: Service[] = [
  {
    id: "commercial",
    number: "01",
    title: "AI Commercial & Product Advertising",
    short: "Realistic, scroll-stopping product ads for brands and e-commerce.",
    description:
      "Create realistic and engaging product advertisements for businesses and e-commerce brands.",
    image: commercial,
    examples: [
      "Product commercials",
      "AI-generated product demonstrations",
      "Promotional advertisements",
      "Social media product ads",
      "Cinematic brand commercials",
    ],
  },
  {
    id: "ugc",
    number: "02",
    title: "AI UGC Video Creation",
    short: "Authentic-feeling AI creator content for marketing campaigns.",
    description:
      "Create realistic AI-powered user-generated content videos for marketing campaigns.",
    image: ugc,
    examples: [
      "AI spokesperson videos",
      "Product testimonials",
      "Lifestyle product demonstrations",
      "Social media advertisements",
      "Promotional videos",
    ],
  },
  {
    id: "cinematic",
    number: "03",
    title: "Cinematic AI Video Production",
    short: "Film-grade storytelling built with AI video generation.",
    description:
      "Produce visually engaging cinematic videos using AI-powered video generation tools.",
    image: cinematic,
    examples: [
      "Cinematic storytelling",
      "Short films",
      "Dramatic scenes",
      "Commercial storytelling",
      "Social media cinematic videos",
    ],
  },
  {
    id: "animation",
    number: "04",
    title: "AI 3D Animation & Character Videos",
    short: "Imaginative characters and animated worlds, including Minecraft-style cinematics.",
    description: "Create engaging animated videos and imaginative digital characters.",
    image: animation,
    examples: [
      "3D animated characters",
      "3D pixel animation",
      "Minecraft cinematic videos",
      "Animated storytelling",
      "Character-based promotional content",
    ],
  },
  {
    id: "social",
    number: "05",
    title: "AI Social Media Content",
    short: "Short-form video made for TikTok, Reels and Shorts.",
    description: "Create engaging short-form video content for social media platforms.",
    image: social,
    examples: [
      "TikTok videos",
      "Instagram Reels",
      "YouTube Shorts",
      "Promotional content",
      "Short-form storytelling",
    ],
  },
  {
    id: "education",
    number: "06",
    title: "AI Educational & Explainer Videos",
    short: "Complex ideas turned into clear, engaging visual lessons.",
    description: "Transform complex ideas into engaging educational visual content.",
    image: education,
    examples: [
      "AI educational videos",
      "Explainer animations",
      "Training videos",
      "Visual presentations",
      "Educational storytelling",
    ],
  },
];
