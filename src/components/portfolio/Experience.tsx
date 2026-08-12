import { GraduationCap, Building2, Droplets, School } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Section } from "./Section";

const icons = [GraduationCap, Building2, Droplets, School];

export function Experience() {
  return (
    <Section
      id="experience"
      muted
      eyebrow="Experience"
      title="Academic leadership and hands-on water design"
    >
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-8">
        {experience.map((item, i) => {
          const Icon = icons[i] ?? Droplets;
          return (
            <li key={item.role + item.period} className="relative">
              <span className="absolute -left-[31px] top-4 grid size-6 place-items-center rounded-full bg-accent-gradient text-accent-foreground ring-4 ring-surface sm:-left-[43px]">
                <Icon className="size-3.5" />
              </span>
              <div className="card-hover rounded-xl border border-border/70 bg-card p-5 shadow-soft sm:p-6">
                <p className="text-eyebrow text-muted-foreground">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{item.org}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
