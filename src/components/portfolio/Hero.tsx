import { ArrowDownToLine, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-river.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Aerial view of a river meandering through terraced hills"
        width={1600}
        height={1104}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-28 sm:px-8 md:py-40">
        <p className="text-eyebrow text-primary-foreground/70">
          Kathmandu, Nepal · Available for consulting
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
          Roshan Paudel
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85 sm:text-xl">
          Civil engineer and{" "}
          <span className="font-semibold text-primary-foreground">hydrologist</span> specialising in{" "}
          <span className="font-semibold text-primary-foreground">
            water resources, flood modelling
          </span>{" "}
          and{" "}
          <span className="font-semibold text-primary-foreground">
            water supply &amp; sanitary systems
          </span>{" "}
          — plus a decade of engineering teaching.
        </p>


        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <a href={resumeAsset.url} download="Roshan-Paudel-Resume.pdf">
              <ArrowDownToLine className="size-4" />
              Download Resume
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="size-4" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>

        <dl className="mt-14 grid gap-4 text-sm text-primary-foreground/80 sm:grid-cols-3">
          <div className="flex min-w-0 items-center gap-2">
            <MapPin className="size-4 shrink-0" />
            <span className="truncate">Kathmandu, Nepal</span>
          </div>
          <div className="flex min-w-0 items-center gap-2">
            <Mail className="size-4 shrink-0" />
            <a className="truncate hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <div className="flex min-w-0 items-center gap-2">
            <Phone className="size-4 shrink-0" />
            <span className="truncate">{profile.phone}</span>
          </div>
        </dl>
      </div>
    </section>
  );
}
