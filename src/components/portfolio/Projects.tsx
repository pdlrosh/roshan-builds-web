import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Key projects & research"
      title="Selected work across water, cities and buildings"
      description="From national bridge hydrology documentation to flood risk mapping — projects where analysis, engineering and community meet."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="card-hover group flex h-full flex-col border-border/70 bg-card shadow-soft"
          >
            <CardHeader className="gap-2">
              <p className="text-eyebrow text-muted-foreground">{p.tag}</p>
              <CardTitle className="flex items-start gap-2 text-lg leading-snug">
                <span className="min-w-0">{p.title}</span>
                <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between gap-5">
              <p className="text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s} variant="secondary" className="font-medium">
                    {s}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
