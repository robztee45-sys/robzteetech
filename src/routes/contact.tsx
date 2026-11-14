import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { socialItems } from "@/components/site/SocialLinks";
import { site } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a Project — Contact Robztetech" },
      {
        name: "description",
        content:
          "Have an idea? Tell Robztetech about your AI video project — commercials, UGC, cinematic films, 3D animation and more.",
      },
      { property: "og:title", content: "Have an Idea? Let’s Bring It to Life. | Robztetech" },
      {
        property: "og:description",
        content: "Tell me about your project, and let’s create something worth watching.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[480px] w-[800px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="container-studio relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-6 animate-fade-up">Project Inquiry</p>
          <h1 className="animate-fade-up text-balance text-5xl font-medium leading-[0.98] [animation-delay:120ms] md:text-7xl">
            Have an idea? <span className="text-signal">Let’s bring it to life.</span>
          </h1>
          <p className="mt-8 max-w-md animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:240ms]">
            Tell me about your project, and let’s create something worth watching.
          </p>

          <Reveal delay={200} className="mt-12 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-primary/50"
            >
              <Mail className="size-5 text-primary" />
              <span>
                <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </span>
                <span className="block">{site.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5">
              <Clock className="size-5 text-primary" />
              <span>
                <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Response
                </span>
                <span className="block">I reply to every inquiry personally.</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={280} className="mt-10">
            <p className="eyebrow mb-4 text-muted-foreground">Find me on</p>
            <div className="grid grid-cols-2 gap-3">
              {socialItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm text-muted-foreground transition-all duration-500 ease-cinematic hover:border-primary/50 hover:text-foreground"
                >
                  <Icon className="size-4 text-primary" />
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
