import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Youtube, Globe, MapPin, Lightbulb, Video, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/portfolio/SiteChrome";
import heroImage from "@/assets/hero-river.jpg";

const WATERHUB_URL = "https://labs.google.com/pomelli/website/8U4Q5gaIwulcBuQFz0iOYf";
const YOUTUBE_URL = "https://www.youtube.com/@WaterHubNepal";
const title = "WaterHub Nepal — Water Science Channel by Roshan Paudel";
const description =
  "WaterHub Nepal shares sustainable water management practices from around the world and translates complex civil engineering into simple Nepali explainer videos for Nepal.";

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

const aims = [
  {
    icon: Globe,
    title: "Global Insights",
    body: "Explore advanced water infrastructure case studies from cities and basins worldwide.",
  },
  {
    icon: MapPin,
    title: "Local Application",
    body: "Adapt proven global methods to Nepal's rivers, floods, and water supply challenges.",
  },
  {
    icon: Lightbulb,
    title: "Idea Generation",
    body: "Turn world-class engineering into practical, localized ideas for Nepali professionals.",
  },
  {
    icon: Video,
    title: "Nepali Explainer Videos",
    body: "Break down technical water and civil engineering topics into simple Nepali videos.",
  },
  {
    icon: BookOpen,
    title: "Global Practices & Local Adaptation",
    body: "Learn from international examples and apply sustainable solutions in the Nepali context.",
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
              Sustainable water management practices from around the world, explained for Nepal.
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
          <div className="max-w-2xl">
            <p className="text-eyebrow text-primary">Major aims</p>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              Sustainable water management, explained locally
            </h2>
            <p className="mt-4 text-muted-foreground">
              WaterHub Nepal educates students and professionals on global water infrastructure — from urban flood control to ecological wastewater treatment — and translates complex engineering into practical Nepali content.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aims.map((a) => (
              <article
                key={a.title}
                className="rounded-xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-md"
              >
                <a.icon className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
