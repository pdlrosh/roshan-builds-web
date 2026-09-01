import { Linkedin, MapPin, Mail, Phone, BookOpen, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMarks } from "@/components/portfolio/HeroMarks";
import heroBanner from "@/assets/hero-banner.jpg";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroBanner}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        loading="eager"
        className="absolute inset-0 size-full object-cover object-[72%_center] md:object-[60%_center]"
      />
      <div className="bg-hero-veil absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-[16rem] pb-14 sm:px-8 sm:pt-[20rem] md:grid md:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] md:py-28 md:pt-24 lg:py-32">
        <div className="max-w-xl">
          <HeroMarks />

          <h1 className="mt-7 font-display text-4xl font-bold tracking-tight text-deep-foreground sm:text-5xl lg:text-6xl">
            Roshan Paudel
          </h1>
          <p className="text-eyebrow mt-4 text-gold">
            Civil Engineer <span className="text-deep-foreground/40">|</span> Researcher{" "}
            <span className="text-deep-foreground/40">|</span> Educator
          </p>

          <span className="mt-6 block h-px w-16 bg-gold/70" />

          <p className="mt-6 max-w-md text-lg text-deep-foreground/85">
            Building sustainable solutions for a better tomorrow.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="gold">
              <a href="#projects">
                <LayoutGrid className="size-4" />
                Explore Key Projects
              </a>
            </Button>
            <Button asChild size="lg" variant="deep">
              <a href={profile.publications} target="_blank" rel="noreferrer">
                <BookOpen className="size-4" />
                View Publications
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid gap-3 text-sm text-deep-foreground/75 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex min-w-0 items-center gap-2">
              <MapPin className="size-4 shrink-0 text-gold" />
              <span className="truncate">Kathmandu, Nepal</span>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <Mail className="size-4 shrink-0 text-gold" />
              <a className="truncate hover:underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <Phone className="size-4 shrink-0 text-gold" />
              <span className="truncate">{profile.phone}</span>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <Linkedin className="size-4 shrink-0 text-gold" />
              <a
                className="truncate hover:underline"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
