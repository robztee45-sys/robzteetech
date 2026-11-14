import { z } from "zod";
import { budgetRanges, videoTypes } from "@/data/content";

const optionalUrl = z
  .string()
  .trim()
  .max(500, "Link is too long")
  .refine((v) => v === "" || /^https?:\/\/\S+\.\S+/.test(v), "Enter a full link starting with http:// or https://");

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100, "Name is too long"),
  email: z.string().trim().min(1, "Please enter your email").email("Enter a valid email address").max(255),
  company: z.string().trim().max(120, "Company name is too long"),
  videoType: z.enum(videoTypes, { errorMap: () => ({ message: "Choose the type of video you need" }) }),
  description: z
    .string()
    .trim()
    .min(20, "Tell me a little more — at least 20 characters")
    .max(3000, "Please keep it under 3000 characters"),
  budget: z.enum(budgetRanges, { errorMap: () => ({ message: "Choose a budget range" }) }),
  deadline: z.string().trim().max(60),
  reference: optionalUrl,
});

export type InquiryInput = z.input<typeof inquirySchema>;
export type Inquiry = z.output<typeof inquirySchema>;

export function buildInquiryMailto(to: string, data: Inquiry) {
  const subject = `Project Inquiry — ${data.videoType} — ${data.fullName}`;
  const body = [
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Company / Brand: ${data.company || "—"}`,
    `Type of video: ${data.videoType}`,
    `Budget range: ${data.budget}`,
    `Preferred deadline: ${data.deadline || "—"}`,
    `Reference / inspiration: ${data.reference || "—"}`,
    "",
    "Project description:",
    data.description,
  ].join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
