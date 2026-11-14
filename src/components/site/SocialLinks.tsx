import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

function FiverrIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.7 7.3V6.6c0-.9.5-1.4 1.4-1.4h1.4V2h-1.9c-3.1 0-4.6 1.6-4.6 4.6v.7H8.6v3.2H11V22h3.7V10.5h2.9V22h3.6V7.3h-6.5Z" />
      <circle cx="19.4" cy="3.8" r="2" />
    </svg>
  );
}

/** Opens a WhatsApp chat with the studio, with a friendly pre-filled opener. */
export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Robztetech, I'd like to talk about a video project.",
)}`;

export const socialItems = [
  { label: "Fiverr", href: site.links.fiverr, icon: FiverrIcon },
  { label: "LinkedIn", href: site.links.linkedin, icon: Linkedin },
  { label: "Instagram", href: site.links.instagram, icon: Instagram },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  { label: "WhatsApp", href: whatsappLink, icon: MessageCircle },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialItems.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 ease-cinematic hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}
