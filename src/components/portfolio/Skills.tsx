import { Waves, Map } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { skillGroups, skillTags } from "@/data/portfolio";
import { Section } from "./Section";

const groupIcons = [Waves, Map];

export function Skills() {
  return (
    <Section id="skills" muted eyebrow="Skills" title="Tools I use">
      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = groupIcons[i] ?? Waves;
          return (
            <div
              key={group.group}
              className="card-hover rounded-2xl border border-border/70 bg-card p-6 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-sm font-semibold text-foreground">{group.group}</h3>
              </div>
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
          );
        })}
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
