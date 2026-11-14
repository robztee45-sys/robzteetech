import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { processSteps, reasons, testimonials, tools } from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 md:pb-24 md:pt-48">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="container-studio relative">
        <p className="eyebrow mb-6 animate-fade-up">{eyebrow}</p>
        <h1 className="max-w-5xl animate-fade-up text-balance text-5xl font-medium leading-[0.98] [animation-delay:120ms] md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl animate-fade-up text-pretty text-lg leading-relaxed text-muted-foreground [animation-delay:240ms]">
          {intro}
        </p>
        {children ? (
          <div className="mt-10 animate-fade-up [animation-delay:360ms]">{children}</div>
        ) : null}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-studio">
        <SectionHeading
          eyebrow="Creative Process"
          title={
            <>
              From first idea to <span className="text-signal">final cut.</span>
            </>
          }
          intro="A clear, collaborative five-step workflow so you always know where your video stands."
        />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 90}
              className="group relative flex flex-col bg-background p-7 transition-colors duration-500 hover:bg-surface md:min-h-80"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-light text-foreground/15 transition-colors duration-500 group-hover:text-primary">
                  {step.number}
                </span>
                <step.icon className="size-5 text-primary" />
              </div>
              <h3 className="mt-auto pt-10 text-xl font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-signal transition-transform duration-700 ease-cinematic group-hover:scale-x-100" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ToolsSection() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-24 md:py-28">
      <div className="container-studio">
        <SectionHeading
          eyebrow="Tools & Technology"
          title="The studio toolkit."
          intro="Production blends leading AI video generators with traditional editing craft. Tools listed are ones I use in my workflow — not official partnerships or certifications."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 70}>
              <div className="group flex h-full items-center gap-5 rounded-2xl border border-border bg-background/60 p-6 transition-all duration-500 ease-cinematic hover:border-primary/40 hover:bg-background">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-surface font-display text-lg font-semibold text-primary transition-colors group-hover:border-primary/50">
                  {tool.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="font-display text-lg font-medium">{tool.name}</p>
                  <p className="text-sm text-muted-foreground">{tool.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-studio grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Why Robztetech"
            title={
              <>
                Built like a studio. <span className="text-muted-foreground">Fast like AI.</span>
              </>
            }
            intro="The craft of a production house with the speed and flexibility of modern AI tools."
          />
          <Button asChild variant="hero" size="xl" className="mt-10">
            <Link to="/contact">
              Start a Project <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 90}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7 transition-all duration-500 ease-cinematic hover:border-primary/40">
                <r.icon className="size-6 text-primary" />
                <h3 className="mt-8 text-xl font-medium">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <div className="container-studio">
        <SectionHeading
          eyebrow="Client Words"
          title="What clients say."
          intro="Verified client feedback will be featured here."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-dashed border-foreground/15 bg-surface/50 p-7">
                <div className="flex items-center justify-between">
                  <Quote className="size-6 text-primary" />
                  {t.placeholder ? (
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      Placeholder
                    </span>
                  ) : null}
                </div>
                <blockquote className="mt-6 flex-1 text-pretty leading-relaxed text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid size-10 place-items-center rounded-full bg-surface-raised font-display text-sm text-muted-foreground">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-studio">
        <Reveal>
          <div className="viewfinder relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-20 text-center md:px-16 md:py-28">
            <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
            <div className="pointer-events-none absolute -top-32 right-0 h-64 w-96 rounded-full bg-violet/10 blur-[110px]" />
            <p className="eyebrow relative mb-6">Let’s create</p>
            <h2 className="relative mx-auto max-w-4xl text-balance text-4xl font-medium leading-[1.02] md:text-7xl">
              Have an idea? Let’s bring it to life.
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-muted-foreground md:text-lg">
              Tell me about your project, and let’s create something worth watching.
            </p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Start a Project <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/portfolio">Explore My Work</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
