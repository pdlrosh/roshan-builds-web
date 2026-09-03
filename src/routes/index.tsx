import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { CollaborationFooter } from "@/components/portfolio/CollaborationFooter";
import { SiteHeader, SiteFooter } from "@/components/portfolio/SiteChrome";

const title = "Roshan Paudel — Civil Engineer & Hydrologist";
const description =
  "Portfolio of Roshan Paudel: M.Sc. Water Science & Engineering (IHE Delft), lecturer, and designer of water supply, sanitary and sustainable water infrastructure in Nepal.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects />
        <CollaborationFooter />
      </main>
      <SiteFooter />
    </div>
  );
}

