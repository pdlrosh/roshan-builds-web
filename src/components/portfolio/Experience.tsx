import { experience } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      muted
      eyebrow="Experience"
      title="Academic leadership and hands-on water design"
      description="A parallel track: teaching and running a civil engineering department, while designing water supply, drainage and sanitary networks in practice."
    >
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
        {experience.map((item) => (
          <li key={item.role + item.period} className="relative">
            <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-accent-gradient ring-4 ring-surface sm:-left-[39px]" />
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
        ))}
      </ol>
    </Section>
  );
}
