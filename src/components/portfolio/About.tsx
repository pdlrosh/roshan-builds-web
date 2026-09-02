import {
  GraduationCap,
  ScrollText,
  Presentation,
  Handshake,
  ExternalLink,
} from "lucide-react";
import { profile } from "@/data/portfolio";
import { HeroMarks } from "./HeroMarks";
import { Section } from "./Section";
import portrait from "@/assets/roshan-portrait-2.png.asset.json";

type Milestone = {
  phase: string;
  title: string;
  icon: typeof GraduationCap;
  points: string[];
  link?: { label: string; href: string };
};

const before: Milestone[] = [
  {
    phase: "Past · Foundations",
    title: "Academic Foundations",
    icon: GraduationCap,
    points: [
      "M.Sc. Water Science & Engineering — IHE Delft, the Netherlands",
      "B.E. Civil Engineering — Thapathali Campus, Tribhuvan University",
    ],
  },
  {
    phase: "Past / Present · Research",
    title: "Applied Research & Publications",
    icon: ScrollText,
    points: [
      "Published work on payment for ecosystem services in Nepal",
      "Thesis on small storage structures & vulnerability in the Lower Zambesi",
    ],
    link: { label: "View publications", href: profile.publications },
  },
];

const after: Milestone[] = [
  {
    phase: "Present · Education",
    title: "Academic Leadership & Mentorship",
    icon: Presentation,
    points: [
      "Research Head / Assistant Professor, Department of Civil Engineering",
      "10+ years teaching Engineering Hydrology & Water Supply Engineering",
    ],
  },
  {
    phase: "Future · Direction",
    title: "Sustainable Infrastructure Design",
    icon: Handshake,
    points: [
      "Water-sensitive urban systems and climate-resilient hydrology",
      "Chair, IWA-YWP Nepal — building the next generation of water professionals",
    ],
    link: { label: "Collaborate with me", href: "#contact" },
  },
];

function MilestoneCard({ item, align }: { item: Milestone; align: "left" | "right" }) {
  const Icon = item.icon;
  return (
    <div
      className={
        "relative md:w-[calc(50%-2.25rem)] " +
        (align === "left" ? "md:mr-auto md:text-right" : "md:ml-auto")
      }
    >
      <span
        aria-hidden="true"
        className={
          "absolute top-8 hidden size-3 rounded-full bg-gold ring-4 ring-background md:block " +
          (align === "left" ? "-right-[2.9rem]" : "-left-[2.9rem]")
        }
      />
      <article className="card-hover rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
        <div
          className={
            "flex items-center gap-3 " + (align === "left" ? "md:flex-row-reverse" : "")
          }
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
            <Icon className="size-5" />
          </span>
          <p className="text-eyebrow text-accent-foreground/70">{item.phase}</p>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
        <ul className="mt-3 space-y-2">
          {item.points.map((p) => (
            <li key={p} className="text-sm leading-relaxed text-muted-foreground">
              {p}
            </li>
          ))}
        </ul>
        {item.link ? (
          <a
            href={item.link.href}
            target={item.link.href.startsWith("#") ? undefined : "_blank"}
            rel={item.link.href.startsWith("#") ? undefined : "noreferrer"}
            className={
              "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
            }
          >
            {item.link.label}
            <ExternalLink className="size-3.5" />
          </a>
        ) : null}
      </article>
    </div>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="The path to sustainable impact"
      description="Foundations, research, teaching and what comes next — a short journey through water resources and sustainability."
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent md:block"
        />

        <div className="space-y-8">
          {before.map((item, i) => (
            <MilestoneCard key={item.title} item={item} align={i % 2 === 0 ? "left" : "right"} />
          ))}

          {/* Centered professional vision */}
          <div className="relative mx-auto max-w-2xl py-4">
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-surface shadow-soft">
              <img
                src={portrait.url}
                alt="Roshan Paudel, civil engineer and hydrologist"
                loading="lazy"
                className="h-72 w-full object-cover object-top sm:h-96"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/90 via-deep/60 to-transparent p-6 pt-16 text-center">
                <p className="text-eyebrow text-gold">The professional vision</p>
                <p className="mx-auto mt-2 max-w-md text-base font-medium leading-relaxed text-primary-foreground">
                  Advancing water infrastructure and hydrological education for a resilient
                  tomorrow.
                </p>
              </div>
            </div>
            <HeroMarks
              gradientId="aboutGoldStroke"
              className="mt-6 justify-center"
            />
          </div>

          {after.map((item, i) => (
            <MilestoneCard key={item.title} item={item} align={i % 2 === 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </Section>
  );
}
