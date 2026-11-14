import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinematic",
        scrolled
          ? "border-b border-border bg-background/75 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5",
      )}
    >
      <div className="container-studio flex items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <Link to="/contact">Start a Project</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="glass" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-border bg-background sm:max-w-sm">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-10 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    className="group flex items-baseline gap-4 border-b border-border py-5 font-display text-3xl text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                  >
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
              <Button asChild variant="hero" size="xl" className="mt-10 w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Start a Project
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
