import { describe, expect, it } from "vitest";
import { buildInquiryMailto, inquirySchema } from "@/lib/inquiry";

const valid = {
  fullName: "Jane Doe",
  email: "jane@brand.com",
  company: "",
  videoType: "AI UGC Video",
  description: "A 30 second UGC ad for our new skincare serum.",
  budget: "$300 – $750",
  deadline: "",
  reference: "",
};

describe("project inquiry form", () => {
  it("accepts a complete inquiry with optional fields left empty", () => {
    expect(inquirySchema.safeParse(valid).success).toBe(true);
  });

  it("requires a valid email address", () => {
    expect(inquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("requires the type of video and a budget range", () => {
    expect(inquirySchema.safeParse({ ...valid, videoType: undefined }).success).toBe(false);
    expect(inquirySchema.safeParse({ ...valid, budget: undefined }).success).toBe(false);
  });

  it("requires a project description of at least 20 characters", () => {
    expect(inquirySchema.safeParse({ ...valid, description: "Short" }).success).toBe(false);
  });

  it("rejects a reference that is not a full link", () => {
    expect(inquirySchema.safeParse({ ...valid, reference: "youtube" }).success).toBe(false);
    expect(inquirySchema.safeParse({ ...valid, reference: "https://youtu.be/abc" }).success).toBe(true);
  });

  it("addresses the email to the studio inbox with the details", () => {
    const parsed = inquirySchema.parse(valid);
    const link = buildInquiryMailto("hello@robztetech.com", parsed);
    expect(link.startsWith("mailto:hello@robztetech.com?subject=")).toBe(true);
    expect(decodeURIComponent(link)).toContain("Budget range: $300 – $750");
  });
});
