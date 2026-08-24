import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Youtube, Droplets, Waves, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/portfolio/SiteChrome";
import heroImage from "@/assets/hero-river.jpg";

const WATERHUB_URL = "https://labs.google.com/pomelli/website/8U4Q5gaIwulcBuQFz0iOYf";
const title = "WaterHub Nepal — Water Science Channel by Roshan Paudel";
const description =
  "WaterHub Nepal is Roshan Paudel's YouTube channel and micro-site sharing hydrology, water supply and flood-resilience knowledge for Nepal.";

export const Route = createFileRoute("/waterhub")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WaterHubPage,
});

const highlights = [
  {
    icon: Droplets,
    title: "Hydrology explained",
    body: "Short, practical videos on catchments, rainfall-runoff and design floods.",
  },
  {
    icon: Waves,
    title: "Water & sanitation",
    body: "Supply networks, drainage and sanitary design walkthroughs from real projects.",
  },
  {
    icon: GraduationCap,
    title: "For students",
    body: "Tool tutorials — HEC-RAS, HEC-HMS, GIS — aimed at Nepali engineering students.",
  },
];

function WaterHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-surface">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-20 lg:block"
          />
          <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <p className="text-eyebrow text-primary">A side project</p>
            <h1 className="mt-3 max-w-2xl text-4xl font-bold text-foreground sm:text-5xl">
              WaterHub Nepal
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              My YouTube channel and micro-site sharing water science, hydrology and
              infrastructure knowledge for Nepal.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={WATERHUB_URL} target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4" />
                  Visit WaterHub Nepal
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={WATERHUB_URL} target="_blank" rel="noreferrer">
                  <Youtube className="size-4" />
                  Watch the channel
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {highlights.map((h) => (
              <article
                key={h.title}
                className="rounded-xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-md"
              >
                <h.icon className="size-6 text-primary" />
                <h2 className="mt-4 text-lg font-semibold text-foreground">{h.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
