import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { skillGroups, skillTags } from "@/data/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      muted
      eyebrow="Skills"
      title="Tools I work in every week"
      description="Modelling, geospatial analysis and design software, backed by a decade of teaching the fundamentals behind them."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.group}
            className="card-hover rounded-2xl border border-border/70 bg-card p-6 shadow-soft"
          >
            <h3 className="text-sm font-semibold text-foreground">{group.group}</h3>
            <div className="mt-6 space-y-5">
              {group.skills.map((s) => (
                <div key={s.name}>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <span className="truncate text-sm font-medium text-foreground">{s.name}</span>
                    <span className="text-xs font-semibold text-muted-foreground">{s.level}%</span>
                  </div>
                  <Progress value={s.level} className="mt-2 h-1.5" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {skillTags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-primary"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
