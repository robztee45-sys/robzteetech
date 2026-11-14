import type { CSSProperties } from "react";
import grassSide from "@/assets/tex-grass-side.png";
import grassTop from "@/assets/tex-grass-top.png";
import dirt from "@/assets/tex-dirt.png";
import ore from "@/assets/tex-ore.png";
import stone from "@/assets/tex-stone.png";
import { cn } from "@/lib/utils";

type Variant = "grass" | "ore" | "stone";

/** Original 16×16 pixel textures drawn for this site (not game assets). */
const textures: Record<Variant, { side: string; top: string; bottom: string }> = {
  grass: { side: grassSide, top: grassTop, bottom: dirt },
  ore: { side: ore, top: stone, bottom: stone },
  stone: { side: stone, top: stone, bottom: stone },
};

type Props = {
  variant?: Variant;
  /** Edge length — a number (px) or any CSS length, e.g. "clamp(70px, 14vw, 150px)". */
  size?: number | string;
  /** Seconds per full turn. */
  spin?: number;
  /** Seconds to offset the floating motion, so a group of cubes doesn't bob in sync. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/** A slowly turning, floating pixel-art block built with CSS 3D transforms. */
export function VoxelCube({
  variant = "grass",
  size = 120,
  spin = 18,
  delay = 0,
  className,
  style,
}: Props) {
  const tex = textures[variant];
  const edge = typeof size === "number" ? `${size}px` : size;
  const face = (key: "front" | "back" | "left" | "right" | "top" | "bottom", image: string) => (
    <span
      key={key}
      className={`voxel-face voxel-face--${key}`}
      style={{ backgroundImage: `url(${image})` }}
    />
  );

  return (
    <div
      aria-hidden="true"
      className={cn("voxel-float absolute", className)}
      style={{
        width: edge,
        height: edge,
        animationDelay: `${-delay}s`,
        ["--s" as string]: edge,
        ...style,
      }}
    >
      <div className="voxel-cube" style={{ animationDuration: `${spin}s` }}>
        {face("front", tex.side)}
        {face("back", tex.side)}
        {face("left", tex.side)}
        {face("right", tex.side)}
        {face("top", tex.top)}
        {face("bottom", tex.bottom)}
      </div>
      <span className="voxel-shadow" />
    </div>
  );
}
