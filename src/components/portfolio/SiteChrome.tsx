import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#home" className="min-w-0">
          <span className="block truncate font-display text-base font-bold tracking-tight">
            Roshan Paudel
          </span>
          <span className="block truncate text-xs text-muted-foreground">
            Civil Engineer · Hydrologist · Assistant Professor
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-1">
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/waterhub"
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              WaterHub Nepal
            </Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border/60 bg-background px-5 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/waterhub"
            onClick={() => setOpen(false)}
            className="block rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            WaterHub Nepal
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Roshan Paudel. Kathmandu, Nepal.</p>
        <p>Water science · Civil engineering · Hydrology</p>
      </div>
    </footer>
  );
}
