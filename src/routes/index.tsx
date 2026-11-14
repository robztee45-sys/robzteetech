import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import studio from "@/assets/about-studio.jpg";
import { Hero } from "@/components/site/Hero";
import { MarqueeBand } from "@/components/site/MarqueeBand";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  CtaBand,
  ProcessSection,
  TestimonialsSection,
  ToolsSection,
  WhySection,
} from "@/components/site/sections";
import { VideoModal } from "@/components/site/VideoModal";
import { VoxelWorld } from "@/components/site/VoxelWorld";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Robztetech — AI Video Production Studio | Turning Ideas Into Visual Experiences" },
      {
        name: "description",
        content:
          "Cinematic AI videos, realistic product commercials, AI UGC ads, 3D animation and social content for brands, businesses and creators.",
      },
      { property: "og:title", content: "Robztetech — AI Video Production Studio" },
      {
        property: "og:description",
        content:
          "Turning ideas into visual experiences with AI-powered cinematic video production.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />
      <MarqueeBand />

      {/* About teaser */}
      <section className="relative py-24 md:py-36">
        <div className="container-studio grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="viewfinder relative overflow-hidden rounded-3xl p-3">
              <img
                src={studio}
                alt="Robztetech editing suite with colour-grading monitors and a cinema camera"
                loading="lazy"
                width={1200}
                height={1504}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl border border-border bg-surface/90 px-5 py-4 backdrop-blur-xl md:-right-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Now booking
              </p>
              <p className="mt-1 font-display text-lg">New projects</p>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About Robztetech"
              title="Creativity meets artificial intelligence."
            />
            <Reveal
              delay={120}
              className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground md:text-lg"
            >
              <p>
                Robztetech is an AI-powered creative video production brand focused on bringing
                ideas to life through innovative visual storytelling.
              </p>
              <p>
                I combine artificial intelligence, creative direction, and digital production
                techniques to create engaging videos for brands, businesses, entrepreneurs, and
                content creators.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Button asChild variant="glass" size="xl" className="mt-10">
                <Link to="/about">
                  More about the studio <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="relative border-y border-border bg-surface/40 py-24 md:py-32">
        <div className="container-studio">
          <SectionHeading
            eyebrow="My Services"
            title="Six ways to tell your story."
            action={
              <Button asChild variant="glass" size="xl">
                <Link to="/services">
                  All services <ArrowRight />
                </Link>
              </Button>
            }
          />
          <ul className="mt-14 border-t border-border">
            {services.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 50}>
                <Link
                  to="/services"
                  hash={s.id}
                  className="group relative grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-border py-7 transition-colors md:grid-cols-[5rem_1.2fr_1fr_auto] md:gap-8 md:py-9"
                >
                  <span className="font-mono text-sm text-primary">{s.number}</span>
                  <span className="font-display text-xl font-medium transition-transform duration-700 ease-cinematic group-hover:translate-x-2 md:text-3xl">
                    {s.title}
                  </span>
                  <span className="hidden text-sm text-muted-foreground md:block">{s.short}</span>
                  <span className="grid size-11 place-items-center rounded-full border border-border transition-all duration-500 ease-cinematic group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    width={1600}
                    height={912}
                    className="pointer-events-none absolute right-24 top-1/2 hidden h-36 w-60 -translate-y-1/2 rotate-2 rounded-xl object-cover opacity-0 shadow-glow-soft transition-all duration-700 ease-cinematic group-hover:-rotate-2 group-hover:opacity-100 lg:block"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured work */}
      <section className="relative py-24 md:py-32">
        <div className="container-studio">
          <SectionHeading
            eyebrow="Portfolio"
            title={
              <>
                Selected <span className="text-signal">creative works.</span>
              </>
            }
            intro="Hover to preview, click to watch."
            action={
              <Button asChild variant="hero" size="xl">
                <Link to="/portfolio">
                  View full portfolio <ArrowRight />
                </Link>
              </Button>
            }
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {featured[0] ? (
              <Reveal className="lg:row-span-2">
                <ProjectCard
                  project={featured[0]}
                  onPlay={setActive}
                  size="large"
                  className="h-full [&>div]:h-full [&>div]:aspect-auto lg:[&>div]:min-h-[560px]"
                />
              </Reveal>
            ) : null}
            {featured.slice(1).map((p, i) => (
              <Reveal key={p.id} delay={(i + 1) * 100}>
                <ProjectCard project={p} onPlay={setActive} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VoxelWorld />
      <ProcessSection />
      <ToolsSection />
      <WhySection />
      <TestimonialsSection />
      <CtaBand />

      <VideoModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
