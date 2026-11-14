import { describe, expect, it } from "vitest";
import { getVideoSource } from "@/lib/video-source";

describe("portfolio video links", () => {
  it("plays MP4 files in the native player", () => {
    expect(getVideoSource("https://cdn.example.com/reel.mp4?v=2")).toEqual({
      kind: "file",
      src: "https://cdn.example.com/reel.mp4?v=2",
    });
  });

  it("turns YouTube watch, share and shorts links into embeds", () => {
    for (const url of [
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://youtu.be/dQw4w9WgXcQ",
      "https://youtube.com/shorts/dQw4w9WgXcQ",
    ]) {
      const s = getVideoSource(url);
      expect(s.kind).toBe("embed");
      expect(s.src).toContain("youtube.com/embed/dQw4w9WgXcQ");
    }
  });

  it("turns Vimeo links into embeds", () => {
    expect(getVideoSource("https://vimeo.com/76979871").src).toContain(
      "player.vimeo.com/video/76979871",
    );
  });
});
