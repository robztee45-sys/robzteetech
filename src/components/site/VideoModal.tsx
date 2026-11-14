import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
import { getVideoSource } from "@/lib/video-source";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function VideoModal({ project, onClose }: Props) {
  const source = project ? getVideoSource(project.video) : null;

  return (
    <DialogPrimitive.Root open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-scrim/90 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-[71] w-[min(92vw,1200px)] -translate-x-1/2 -translate-y-1/2 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-300">
          {project && source ? (
            <>
              <div className="mb-4 flex items-end justify-between gap-6">
                <div>
                  <p className="eyebrow mb-2">{project.category}</p>
                  <DialogPrimitive.Title className="font-display text-2xl font-medium md:text-3xl">
                    {project.title}
                  </DialogPrimitive.Title>
                </div>
                <DialogPrimitive.Close
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  aria-label="Close video"
                >
                  <X className="size-5" />
                </DialogPrimitive.Close>
              </div>
              <div className="viewfinder overflow-hidden rounded-xl border border-border bg-scrim shadow-glow-soft">
                <div className="aspect-video w-full">
                  {source.kind === "file" ? (
                    <video
                      key={source.src}
                      src={source.src}
                      poster={project.thumbnail}
                      controls
                      autoPlay
                      playsInline
                      className="h-full w-full bg-scrim object-contain"
                    />
                  ) : (
                    <iframe
                      key={source.src}
                      src={source.src}
                      title={project.title}
                      className="h-full w-full"
                      allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
              <DialogPrimitive.Description className="mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">
                {project.description}
              </DialogPrimitive.Description>
            </>
          ) : null}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
