import { useMemo, useState } from "react";
import { projectCategories, projects, type Project, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { VideoModal } from "./VideoModal";

type Filter = "All" | ProjectCategory;

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );
  const filters: Filter[] = ["All", ...projectCategories];

  return (
    <>
      <div className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0" role="tablist" aria-label="Filter projects">
        <div className="flex w-max gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all duration-500 ease-cinematic",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {visible.map((p, i) => (
          <Reveal
            key={`${filter}-${p.id}`}
            delay={(i % 3) * 80}
            className={cn(
              filter === "All" && (i % 5 === 0 || i % 5 === 1) ? "lg:col-span-3" : "lg:col-span-2",
              filter !== "All" && "lg:col-span-3",
            )}
          >
            <ProjectCard project={p} onPlay={setActive} size={i % 5 < 2 ? "large" : "default"} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-muted-foreground">No projects in this category yet.</p>
      ) : null}

      <VideoModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
