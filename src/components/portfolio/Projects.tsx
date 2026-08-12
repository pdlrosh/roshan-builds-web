import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Key projects & research" title="Selected work across water and cities">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft"
          >
            <img
              src={p.image}
              alt={p.title}
              width={1024}
              height={768}
              loading="lazy"
              className="h-44 w-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-4 p-5">
              <div>
                <p className="text-eyebrow text-muted-foreground">{p.tag}</p>
                <h3 className="mt-2 flex items-start gap-2 text-base font-semibold leading-snug">
                  <span className="min-w-0">{p.title}</span>
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s} variant="secondary" className="font-medium">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
