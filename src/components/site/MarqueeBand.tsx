import { videoTypes } from "@/data/content";

const items = videoTypes.filter((t) => t !== "Other");

/** Slow, endless ticker of the kinds of video the studio makes. Pauses on hover. */
export function MarqueeBand() {
  return (
    <div
      className="relative overflow-hidden border-y border-border bg-surface/40 py-5"
      role="region"
      aria-label="Types of video we make"
    >
      <div className="marquee-track flex w-max animate-marquee gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-10" aria-hidden={copy === 1}>
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-10 font-display text-lg text-foreground/70 md:text-2xl"
              >
                <span>{item}</span>
                <span className="size-2 rotate-45 bg-primary" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />
    </div>
  );
}
