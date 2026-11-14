import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Robztetech home">
      <span className="relative grid size-8 place-items-center rounded-md border border-primary/40 bg-primary/10">
        <span className="size-2.5 rounded-full bg-primary shadow-glow transition-transform duration-500 ease-cinematic group-hover:scale-125" />
      </span>
      <span className="font-display text-lg font-semibold tracking-[0.18em]">ROBZTETECH</span>
    </Link>
  );
}
