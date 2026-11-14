import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBand, PageHero, ProcessSection } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "AI Video Services — Commercials, UGC, Cinematic, 3D | Robztetech" },
      {
        name: "description",
        content:
          "AI product commercials, AI UGC videos, cinematic AI production, 3D animation and Minecraft cinematics, social media content and explainer videos.",
      },
      { property: "og:title", content: "AI Video Services | Robztetech" },
      {
        property: "og:description",
        content: "Six AI-powered video services for brands, businesses and content creators.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="My Services"
        title={
          <>
            Video for every <span className="text-signal">story & screen.</span>
          </>
        }
        intro="From high-converting product ads to cinematic short films, each service is shaped around your brand, audience and platform."
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">
            Start a Project <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="container-studio grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 90} className="scroll-mt-28">
              <div id={s.id} className="h-full scroll-mt-28">
                <ServiceCard service={s} detailed />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessSection />
      <CtaBand />
    </>
  );
}
