import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/config/site";
import { budgetRanges, videoTypes } from "@/data/content";
import { buildInquiryMailto, inquirySchema, type Inquiry, type InquiryInput } from "@/lib/inquiry";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 rounded-xl border-border bg-background/60 px-4 text-base placeholder:text-muted-foreground/60 focus-visible:border-primary/60 md:text-sm";

function Field({
  id,
  label,
  optional,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string | undefined;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} className="text-sm text-foreground/90">
        {label}
        {optional ? <span className="ml-1.5 text-muted-foreground">(optional)</span> : null}
      </Label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput, unknown, Inquiry>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      description: "",
      deadline: "",
      reference: "",
    },
  });

  const onSubmit = (data: Inquiry) => {
    window.location.href = buildInquiryMailto(site.email, data);
    setSent(true);
    toast.success("Your inquiry is ready to send", {
      description: "Your email app opened with all the project details filled in.",
    });
    reset();
  };

  if (sent) {
    return (
      <div className="flex min-h-[520px] flex-col items-center justify-center rounded-3xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="size-12 text-primary" />
        <h3 className="mt-6 text-3xl font-medium">Thanks — almost there.</h3>
        <p className="mt-3 max-w-md text-muted-foreground">
          Your email app should have opened with your project details. Just press send and I’ll get
          back to you soon. If nothing opened, email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-primary underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          .
        </p>
        <Button variant="glass" size="xl" className="mt-8" onClick={() => setSent(false)}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5 rounded-3xl border border-border bg-surface p-6 shadow-card md:grid-cols-2 md:p-10"
    >
      <Field id="fullName" label="Full Name" error={errors.fullName?.message}>
        <Input
          id="fullName"
          autoComplete="name"
          placeholder="Jane Doe"
          className={fieldClass}
          {...register("fullName")}
        />
      </Field>
      <Field id="email" label="Email Address" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="jane@brand.com"
          className={fieldClass}
          {...register("email")}
        />
      </Field>
      <Field id="company" label="Company or Brand Name" optional error={errors.company?.message}>
        <Input
          id="company"
          autoComplete="organization"
          placeholder="Your brand"
          className={fieldClass}
          {...register("company")}
        />
      </Field>
      <Field id="videoType" label="Type of Video Needed" error={errors.videoType?.message}>
        <Controller
          control={control}
          name="videoType"
          render={({ field }) => (
            <Select value={field.value ?? ""} onValueChange={field.onChange}>
              <SelectTrigger
                id="videoType"
                className={cn(fieldClass, "w-full")}
                onBlur={field.onBlur}
              >
                <SelectValue placeholder="Select a video type" />
              </SelectTrigger>
              <SelectContent>
                {videoTypes.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </Field>
      <Field
        id="description"
        label="Project Description"
        error={errors.description?.message}
        className="md:col-span-2"
      >
        <Textarea
          id="description"
          rows={6}
          placeholder="What are you promoting, who is it for, and what should the video feel like?"
          className={cn(fieldClass, "h-auto min-h-36 py-3")}
          {...register("description")}
        />
      </Field>
      <Field id="budget" label="Budget Range" error={errors.budget?.message}>
        <Controller
          control={control}
          name="budget"
          render={({ field }) => (
            <Select value={field.value ?? ""} onValueChange={field.onChange}>
              <SelectTrigger id="budget" className={cn(fieldClass, "w-full")} onBlur={field.onBlur}>
                <SelectValue placeholder="Select a budget" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </Field>
      <Field id="deadline" label="Preferred Deadline" optional error={errors.deadline?.message}>
        <Input
          id="deadline"
          type="date"
          className={cn(fieldClass, "[color-scheme:dark]")}
          {...register("deadline")}
        />
      </Field>
      <Field
        id="reference"
        label="Reference Video or Inspiration Link"
        optional
        error={errors.reference?.message}
        className="md:col-span-2"
      >
        <Input
          id="reference"
          type="url"
          placeholder="https://..."
          className={fieldClass}
          {...register("reference")}
        />
      </Field>
      <div className="flex flex-col gap-4 pt-2 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted-foreground">
          Submitting opens your email app with everything filled in, addressed to {site.email}.
        </p>
        <Button
          type="submit"
          variant="hero"
          size="xl"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          Send Project Inquiry <Send />
        </Button>
      </div>
    </form>
  );
}
