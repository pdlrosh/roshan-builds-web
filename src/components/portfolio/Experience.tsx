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
      <ol className="relative space-y-8 border-l border-border pl-8 sm:pl-10">
        {experience.map((item, i) => {
          const Icon = icons[i] ?? Droplets;
          return (
            <li key={item.role + item.period} className="relative">
              <span className="absolute -left-[37px] top-0 grid size-7 place-items-center rounded-full bg-accent-gradient text-accent-foreground ring-4 ring-surface sm:-left-[49px] sm:size-8">
                <Icon className="size-4" />
              </span>
              <div className="card-hover rounded-2xl border border-border/70 bg-card p-5 shadow-soft sm:p-6">
                <p className="text-eyebrow text-muted-foreground">{item.period}</p>
                <h3 className="mt-2 text-lg font-semibold leading-tight text-foreground sm:text-xl">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{item.org}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
