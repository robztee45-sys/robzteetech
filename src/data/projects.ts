import product from "@/assets/work-product.jpg";
import ugc from "@/assets/work-ugc.jpg";
import cinematic from "@/assets/work-cinematic.jpg";
import animation from "@/assets/work-3d.jpg";
import voxel from "@/assets/work-voxel.jpg";
import education from "@/assets/work-education.jpg";
import reel from "@/assets/hero-reel.mp4.asset.json";
import voxelLoop from "@/assets/voxel-loop.mp4";

/**
 * PORTFOLIO PROJECTS — replace these samples with your own work.
 *
 * - `thumbnail`: import an image from src/assets, or paste any image URL.
 * - `video`: an MP4 link (or uploaded video) OR a YouTube / Vimeo link.
 *     e.g. "https://youtu.be/XXXXXXXXXXX"  or  "https://vimeo.com/123456789"
 * - `sample: true` shows a "Sample" badge. Set it to false (or remove it) for real projects.
 * - `featured: true` shows the project on the home page.
 */

export const projectCategories = [
  "Product Commercials",
  "AI UGC Advertisements",
  "Cinematic AI Films",
  "3D Animation",
  "Minecraft Videos",
  "Educational Videos",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  thumbnail: string;
  video: string;
  duration?: string;
  format?: string;
  sample?: boolean;
  featured?: boolean;
};

const sampleReel = reel.url;

export const projects: Project[] = [
  {
    id: "noir-fragrance",
    title: "Noir — Fragrance Launch Spot",
    category: "Product Commercials",
    description:
      "Sample concept: a slow-motion, water-splash hero commercial for a luxury fragrance brand.",
    thumbnail: product,
    video: sampleReel,
    duration: "0:30",
    format: "16:9",
    sample: true,
    featured: true,
  },
  {
    id: "glow-serum-ugc",
    title: "Glow Serum — Creator Testimonial",
    category: "AI UGC Advertisements",
    description:
      "Sample concept: an AI spokesperson delivers a relaxed at-home review for a skincare product.",
    thumbnail: ugc,
    video: sampleReel,
    duration: "0:45",
    format: "9:16",
    sample: true,
    featured: true,
  },
  {
    id: "the-last-signal",
    title: "The Last Signal",
    category: "Cinematic AI Films",
    description:
      "Sample concept: a moody neo-noir short film set on rain-soaked rooftops under a giant moon.",
    thumbnail: cinematic,
    video: sampleReel,
    duration: "2:10",
    format: "2.39:1",
    sample: true,
    featured: true,
  },
  {
    id: "bolt-explorer",
    title: "Bolt the Explorer",
    category: "3D Animation",
    description:
      "Sample concept: a character-driven 3D animated short following a tiny robot through a glowing forest.",
    thumbnail: animation,
    video: sampleReel,
    duration: "1:20",
    format: "16:9",
    sample: true,
  },
  {
    id: "kingdom-of-blocks",
    title: "Kingdom of Blocks",
    category: "Minecraft Videos",
    description:
      "Sample concept: an epic cinematic trailer for a block-built fantasy kingdom at golden hour.",
    thumbnail: voxel,
    video: voxelLoop,
    duration: "1:05",
    format: "16:9",
    sample: true,
  },
  {
    id: "inside-the-mind",
    title: "Inside the Mind",
    category: "Educational Videos",
    description:
      "Sample concept: a clean holographic explainer on how neural networks learn, built for e-learning.",
    thumbnail: education,
    video: sampleReel,
    duration: "3:00",
    format: "16:9",
    sample: true,
  },
];
