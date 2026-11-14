import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGallery } from "@/components/site/PortfolioGallery";
import { CtaBand, PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected Creative Works | Robztetech" },
      {
        name: "description",
        content:
          "Watch AI product commercials, UGC ads, cinematic AI films, 3D animation, Minecraft cinematics and educational videos by Robztetech.",
      },
      { property: "og:title", content: "Selected Creative Works | Robztetech" },
      {
        property: "og:description",
        content: "A cinematic portfolio of AI-powered video production.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Selected <span className="text-signal">creative works.</span>
          </>
        }
        intro="Filter by category, hover to preview and click any project to watch. Projects marked “Sample” are concept placeholders while new client work is being added."
      />
      <section className="pb-24 md:pb-32">
        <div className="container-studio">
          <PortfolioGallery />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
