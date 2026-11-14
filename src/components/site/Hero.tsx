import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import poster from "@/assets/hero-poster.jpg";
import reel from "@/assets/hero-reel.mp4.asset.json";

const headline = ["Turning", "Ideas", "Into", "Visual", "Experiences."];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={reel.url}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-fade-bottom" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

      {/* Viewfinder overlay */}
      <div className="pointer-events-none absolute inset-6 hidden md:block md:inset-10">
        <div className="viewfinder h-full w-full" />
      </div>
      <div className="pointer-events-none absolute right-10 top-28 hidden items-center gap-2 font-mono text-xs tracking-[0.2em] text-foreground/80 md:flex">
        <span className="size-2 animate-rec rounded-full bg-destructive" /> REC
      </div>

      <div className="container-studio relative pb-20 pt-40 md:pb-28">
        <p className="eyebrow mb-8 animate-fade-up">AI Video Production Studio</p>
        <h1 className="max-w-5xl text-balance text-[clamp(2.9rem,8vw,7.5rem)] font-medium leading-[0.95]">
          {headline.map((word, i) => (
            <span
              key={word}
              className={`mr-[0.22em] inline-block animate-word-rise ${i >= 3 ? "text-signal" : ""}`}
              style={{ animationDelay: `${200 + i * 110}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p
          className="mt-8 max-w-2xl animate-fade-up text-pretty text-lg leading-relaxed text-foreground/75 md:text-xl"
          style={{ animationDelay: "900ms" }}
        >
          From cinematic storytelling to high-converting product advertisements, Robztetech uses
          AI-powered creativity to transform concepts into engaging visual content.
        </p>
        <div
          className="mt-10 flex animate-fade-up flex-wrap gap-3"
          style={{ animationDelay: "1100ms" }}
        >
          <Button asChild variant="hero" size="xl">
            <Link to="/portfolio">
              <Play className="fill-current" /> Explore My Work
            </Link>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link to="/contact">
              Start a Project <ArrowRight />
            </Link>
          </Button>
        </div>

        <div
          className="mt-16 hidden animate-fade-up items-center justify-between border-t border-foreground/10 pt-6 font-mono text-xs uppercase tracking-[0.2em] text-foreground/60 md:flex"
          style={{ animationDelay: "1300ms" }}
        >
          <span>Commercials · UGC · Cinematic · 3D · Social · Explainers</span>
          <span>Showreel — 00:00:08</span>
        </div>
      </div>
    </section>
  );
}
