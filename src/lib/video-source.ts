export type VideoSource =
  | { kind: "file"; src: string }
  | { kind: "embed"; src: string; provider: "youtube" | "vimeo" | "other" };

/**
 * Turns any video link into something the player can show.
 * - MP4 / WebM / MOV files (or uploaded asset URLs) play in a native <video> player.
 * - YouTube and Vimeo links (watch, share, shorts) become embeds.
 * - Any other "embed" URL is used as-is in an iframe.
 */
export function getVideoSource(url: string): VideoSource {
  const trimmed = url.trim();

  const yt = trimmed.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );
  if (yt) {
    return {
      kind: "embed",
      provider: "youtube",
      src: `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0&modestbranding=1`,
    };
  }

  const vimeo = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) {
    return {
      kind: "embed",
      provider: "vimeo",
      src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1&title=0&byline=0`,
    };
  }

  const path = trimmed.split(/[?#]/)[0].toLowerCase();
  if (/\.(mp4|webm|mov|m4v|ogg)$/.test(path)) {
    return { kind: "file", src: trimmed };
  }

  if (/^https?:\/\//.test(trimmed)) {
    return { kind: "embed", provider: "other", src: trimmed };
  }

  return { kind: "file", src: trimmed };
}
