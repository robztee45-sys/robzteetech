import { createFileRoute } from "@tanstack/react-router";
import studio from "@/assets/about-studio.jpg";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  PageHero,
  ProcessSection,
  ToolsSection,
  WhySection,
} from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Robztetech — Creativity Meets Artificial Intelligence" },
      {
        name: "description",
        content:
          "Robztetech combines AI, creative direction and digital production to create engaging videos for brands, businesses, entrepreneurs and creators.",
      },
      {
        property: "og:title",
        content: "About Robztetech — Creativity Meets Artificial Intelligence",
      },
      {
        property: "og:description",
        content: "An AI-powered creative video production brand built around visual storytelling.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const focus = ["Cinematic video", "Product commercials", "AI UGC ads", "Animated storytelling"];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Robztetech"
        title={
          <>
            Creativity meets <span className="text-signal">artificial intelligence.</span>
          </>
        }
        intro="Robztetech is an AI-powered creative video production brand focused on bringing ideas to life through innovative visual storytelling."
      />

      <section className="pb-24 md:pb-32">
        <div className="container-studio grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <div className="viewfinder overflow-hidden rounded-3xl p-3">
              <img
                src={studio}
                alt="Robztetech editing suite with colour-grading monitors and a cinema camera"
                width={1200}
                height={1504}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
          <div className="lg:pt-10">
            <Reveal className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
                I combine artificial intelligence, creative direction, and digital production
                techniques to create engaging videos for brands, businesses, entrepreneurs, and
                content creators.
              </p>
              <p>
                Whether it’s a cinematic video, product commercial, AI-generated UGC advertisement,
                or animated storytelling project, my goal is to turn concepts into memorable visual
                experiences.
              </p>
            </Reveal>
            <Reveal
              delay={150}
              className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border"
            >
              {focus.map((f, i) => (
                <div key={f} className="bg-background p-6">
                  <p className="font-mono text-xs text-primary">0{i + 1}</p>
                  <p className="mt-3 font-display text-lg">{f}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <ProcessSection />
      <ToolsSection />
      <WhySection />
      <CtaBand />
    </>
  );
}
