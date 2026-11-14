import { Link } from "@tanstack/react-router";
import { navItems, site } from "@/config/site";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="container-studio py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm font-display text-2xl leading-snug text-foreground">
              {site.tagline}
            </p>
            <SocialLinks className="mt-8" />
          </div>
          <div>
            <p className="eyebrow mb-5 text-muted-foreground">Navigate</p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5 text-muted-foreground">Start a project</p>
            <a
              href={`mailto:${site.email}`}
              className="block text-foreground transition-colors hover:text-primary"
            >
              {site.email}
            </a>
            <Link
              to="/contact"
              className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline"
            >
              Send a project inquiry →
            </Link>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Robztetech. All rights reserved.</p>
          <p className="font-mono text-xs uppercase tracking-[0.2em]">AI Video Production Studio</p>
        </div>
      </div>
    </footer>
  );
}
