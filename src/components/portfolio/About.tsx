import { GraduationCap, Droplets, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { credentials } from "@/data/portfolio";
import { Section } from "./Section";

const pillars = [
  {
    icon: Droplets,
    title: "Water Science",
    body: "Hydrological and hydraulic modelling for floods, supply networks and hydropower.",
  },
  {
    icon: Waves,
    title: "Water & Sanitary Systems",
    body: "Water supply, drainage and sewage networks designed to national standards, with BoQ.",
  },
  {
    icon: GraduationCap,
    title: "Academic Leadership",
    body: "A decade of teaching, mentoring and research coordination in civil engineering.",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Engineering that respects water and place">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a civil engineer and hydrologist with an{" "}
            <span className="font-semibold text-foreground">
              M.Sc. in Water Science and Engineering
            </span>{" "}
            from IHE Delft, specialising in Hydrology and Water Resources. My work spans
            catchment-scale flood studies through to the water supply and sanitary networks inside a
            building.
          </p>
          <p>
            Over the past decade I have taught engineering hydrology, hydropower and GIS at
            university level, led a civil engineering department as Deputy Head, and designed water
            supply and sewage systems for residential projects and a football stadium. That mix keeps
            my designs grounded: buildable, standard-compliant and honest about cost.
          </p>
          <p>
            I care about{" "}
            <span className="font-semibold text-foreground">sustainable infrastructure</span> — assets
            planned for their whole life cycle — and about{" "}
            <span className="font-semibold text-foreground">sound water engineering</span>, where
            hydrology, hydraulics and cost are decided together rather than in sequence.
          </p>
        </div>


        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {pillars.map((p) => (
              <Card key={p.title} className="card-hover border-border/70 bg-card shadow-soft">
                <CardContent className="flex gap-4 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <p.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {credentials.map((c) => (
          <div
            key={c.label}
            className="card-hover rounded-xl border border-border/70 bg-surface p-5 shadow-soft"
          >
            <p className="text-sm font-semibold text-foreground">{c.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{c.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
