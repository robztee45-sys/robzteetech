import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Clapperboard, Sparkles } from "lucide-react";
import voxelLoop from "@/assets/voxel-loop.mp4";
import voxelPoster from "@/assets/voxel-poster.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { VoxelCube } from "./VoxelCube";

const highlights = [
  {
    icon: Boxes,
    title: "Block-built worlds",
    text: "Custom builds, biomes and set pieces designed around your story.",
  },
  {
    icon: Clapperboard,
    title: "Cinematic camera work",
    text: "Sweeping fly-throughs, dramatic lighting and film-style editing.",
  },
  {
    icon: Sparkles,
    title: "Trailers, lore & shorts",
    text: "Server trailers, series intros, animated shorts and channel content.",
  },
];

/** Minecraft-inspired showcase: looping block-world video, spinning pixel cubes, services copy. */
export function VoxelWorld() {
  return (
    <section
      className="relative overflow-hidden border-y border-border py-24 md:py-32"
      aria-labelledby="voxel-heading"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        src={voxelLoop}
        poster={voxelPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        style={{ imageRendering: "pixelated" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/35 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />

      <div className="container-studio relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <Reveal>
            <p className="font-pixel mb-5 text-sm uppercase tracking-[0.22em] text-(--voxel)">
              ▣ Minecraft Cinematics
            </p>
            <h2
              id="voxel-heading"
              className="text-balance text-4xl font-medium leading-[1.02] md:text-6xl"
            >
              Block-built worlds, <span className="text-(--voxel)">told like films.</span>
            </h2>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-foreground/75 md:text-lg">
              Epic trailers, animated shorts and channel content set in worlds built block by block
              — with the lighting, camera moves and pacing of a real production.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 90}>
                <div className="h-full rounded-xl border border-border bg-background/60 p-5 backdrop-blur-md transition-colors duration-500 hover:border-(--voxel)/50">
                  <h.icon className="size-5 text-(--voxel)" />
                  <h3 className="mt-4 text-base font-medium">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start a Minecraft project <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/portfolio">See block-world work</Link>
            </Button>
          </Reveal>

          <p className="mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground/80">
            Minecraft is a trademark of Mojang Studios / Microsoft. Robztetech is an independent
            studio and is not affiliated with or endorsed by Mojang or Microsoft.
          </p>
        </div>

        {/* Cube stage */}
        <div className="voxel-scene relative mx-auto h-[300px] w-full max-w-md sm:h-[380px] lg:h-[460px] lg:max-w-none">
          <VoxelCube
            variant="grass"
            size="clamp(120px, 30vw, 200px)"
            spin={22}
            delay={0}
            style={{ left: "30%", top: "26%" }}
          />
          <VoxelCube
            variant="ore"
            size="clamp(64px, 16vw, 104px)"
            spin={14}
            delay={2}
            style={{ left: "66%", top: "8%" }}
          />
          <VoxelCube
            variant="stone"
            size="clamp(56px, 14vw, 88px)"
            spin={30}
            delay={4}
            style={{ left: "10%", top: "66%" }}
          />
          <VoxelCube
            variant="grass"
            size="clamp(48px, 11vw, 72px)"
            spin={16}
            delay={1}
            style={{ left: "72%", top: "64%" }}
          />
        </div>
      </div>
    </section>
  );
}
