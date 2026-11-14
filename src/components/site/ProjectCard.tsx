import { Play } from "lucide-react";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import { getVideoSource } from "@/lib/video-source";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
  onPlay: (project: Project) => void;
  size?: "default" | "large";
  className?: string;
};

export function ProjectCard({ project, onPlay, size = "default", className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const source = getVideoSource(project.video);
  const canPreview = source.kind === "file";

  const startPreview = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    void v.play().catch(() => {});
  };
  const stopPreview = () => videoRef.current?.pause();

  return (
    <button
      type="button"
      onClick={() => onPlay(project)}
      onMouseEnter={canPreview ? startPreview : undefined}
      onMouseLeave={canPreview ? stopPreview : undefined}
      onFocus={canPreview ? startPreview : undefined}
      onBlur={canPreview ? stopPreview : undefined}
      aria-label={`Play ${project.title}`}
      className={cn(
        "group relative block w-full overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-card outline-none transition-all duration-700 ease-cinematic hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          size === "large" ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3] sm:aspect-video",
        )}
      >
        <img
          src={project.thumbnail}
          alt=""
          loading="lazy"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-cinematic group-hover:scale-105"
        />
        {canPreview ? (
          <video
            ref={videoRef}
            src={source.src}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100"
          />
        ) : null}
        <div className="absolute inset-0 bg-card-scrim" />

        <div className="absolute inset-x-4 top-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-foreground/15 bg-scrim/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground backdrop-blur-md">
            {project.category}
          </span>
          {project.sample ? (
            <span className="rounded-full border border-violet/40 bg-violet/15 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground backdrop-blur-md">
              Sample
            </span>
          ) : null}
          {project.duration ? (
            <span className="ml-auto font-mono text-xs text-foreground/80">
              {project.format ? `${project.format} · ` : ""}
              {project.duration}
            </span>
          ) : null}
        </div>

        <span className="absolute left-1/2 top-[38%] grid size-14 -translate-x-1/2 -translate-y-1/2 sm:top-1/2 sm:size-16 place-items-center rounded-full border border-foreground/30 bg-foreground/10 text-foreground backdrop-blur-md transition-all duration-700 ease-cinematic group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <Play className="ml-0.5 size-6 fill-current" />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <h3
            className={cn(
              "font-display font-medium leading-tight",
              size === "large" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            )}
          >
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 max-w-xl text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    </button>
  );
}
