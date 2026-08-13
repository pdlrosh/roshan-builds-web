import { Linkedin, MapPin, Mail, Phone, Droplets, Waves, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-river.jpg";
import { profile } from "@/data/portfolio";

const stats = [
  { icon: GraduationCap, label: "M.Sc. IHE Delft" },
  { icon: Droplets, label: "Hydrology & floods" },
  { icon: Waves, label: "Water & sanitary design" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-surface">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-20 lg:block"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-eyebrow text-primary">Hello, I'm</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Roshan Paudel
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Civil Engineer · Hydrologist · Lecturer
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {stats.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft"
              >
                <s.icon className="size-4 text-accent-foreground" />
                {s.label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="outline">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="size-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="flex min-w-0 items-center gap-2">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span className="truncate">Kathmandu, Nepal</span>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <Mail className="size-4 shrink-0 text-primary" />
              <a className="truncate hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              <span className="truncate">{profile.phone}</span>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-accent-gradient opacity-20 blur-2xl" />
          <img
            src={portraitAsset.url}
            alt="Portrait of Roshan Paudel"
            width={1252}
            height={1252}
            className="relative aspect-square w-full rounded-[1.75rem] border border-border/70 object-cover shadow-lift"
          />
        </div>
      </div>
    </section>
  );
}
