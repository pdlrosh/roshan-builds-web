import { GraduationCap, Droplets, Waves, BadgeCheck, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import watershedImage from "@/assets/proj-watershed.jpg";
import { credentials } from "@/data/portfolio";
import { Section } from "./Section";

const pillars = [
  { icon: Droplets, title: "Water Science", body: "Flood, supply and hydropower modelling." },
  { icon: Waves, title: "Water & Sanitary", body: "Supply, drainage and sewage networks with BoQ." },
  { icon: GraduationCap, title: "Teaching", body: "A decade of engineering lecturing and mentoring." },
];

const credentialIcons = [GraduationCap, GraduationCap, BadgeCheck, Users];

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Engineering that respects water and place">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <img
          src={watershedImage}
          alt="Forested watershed with terraced hillsides and a stream in Nepal"
          width={1024}
          height={768}
          loading="lazy"
          className="h-64 w-full rounded-2xl border border-border/70 object-cover shadow-soft lg:h-full"
        />

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            Civil engineer and hydrologist with an{" "}
            <span className="font-semibold text-foreground">M.Sc. in Water Science & Engineering</span>{" "}
            from IHE Delft. I work from catchment-scale flood studies down to the water and sanitary
            networks inside a building — hydrology, hydraulics and cost decided together.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <Card key={p.title} className="card-hover border-border/70 bg-card shadow-soft">
                <CardContent className="p-5">
                  <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((c, i) => {
          const Icon = credentialIcons[i] ?? BadgeCheck;
          return (
            <div
              key={c.label}
              className="card-hover rounded-xl border border-border/70 bg-surface p-5 shadow-soft"
            >
              <Icon className="size-5 text-accent-foreground" />
              <p className="mt-3 text-sm font-semibold text-foreground">{c.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.detail}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
