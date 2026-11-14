import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  detailed = false,
  className,
}: {
  service: Service;
  detailed?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-700 ease-cinematic hover:-translate-y-1 hover:border-primary/40",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1600}
          height={912}
          className="h-full w-full object-cover opacity-80 transition-all duration-[1.4s] ease-cinematic group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-card-scrim" />
        <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.2em] text-primary">
          {service.number}
        </span>
        <ArrowUpRight className="absolute right-5 top-5 size-5 text-foreground/60 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-xl font-medium leading-snug md:text-2xl">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {detailed ? service.description : service.short}
        </p>
        {detailed ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {service.examples.map((ex) => (
              <li
                key={ex}
                className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-foreground/85"
              >
                {ex}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
