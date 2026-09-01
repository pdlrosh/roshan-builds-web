import { useState } from "react";
import { Linkedin, Mail, GraduationCap, ArrowUpRight, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/portfolio";
import { HeroMarks } from "./HeroMarks";

const connectCards = [
  {
    icon: Linkedin,
    label: "Professional Network",
    href: profile.linkedin,
    external: true,
  },
  {
    icon: GraduationCap,
    label: "Research Profile",
    href: profile.publications,
    external: true,
  },
  {
    icon: Mail,
    label: "Direct Email",
    href: `mailto:${profile.email}`,
    external: false,
  },
];

export function CollaborationFooter() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    setSending(true);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent(`Collaboration enquiry from ${name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app", {
      description: "Your message is prefilled and ready to send.",
    });
    form.reset();
    setSending(false);
  }

  return (
    <section id="connect" className="relative isolate overflow-hidden bg-deep py-16 sm:py-20 lg:py-24">
      {/* Subtle gold icon stack watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07]">
        <HeroMarks gradientId="footerGoldStroke" className="scale-150 sm:scale-[2]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Connect for Impact */}
          <div>
            <span className="text-eyebrow text-gold">Connect</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-foreground sm:text-4xl">
              CONNECT FOR IMPACT
            </h2>
            <p className="mt-4 max-w-md text-deep-foreground/75">
              Reach out for research partnerships, consulting, or speaking opportunities.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {connectCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noreferrer" : undefined}
                    className="group card-hover flex items-center justify-between rounded-xl border border-gold/20 bg-deep-foreground/5 p-5 backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-deep-foreground/10"
                  >
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 place-items-center rounded-full bg-gold/10 ring-1 ring-gold/30">
                        <Icon className="size-5 text-gold" />
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold tracking-wide text-deep-foreground">
                          {card.label}
                        </p>
                        <p className="mt-0.5 text-xs text-deep-foreground/60">
                          {card.external ? "Open profile" : "Send an email"}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-5 text-gold/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <span className="text-eyebrow text-gold">Inquire</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-deep-foreground sm:text-4xl">
              INQUIRE FOR COLLABORATION OR SPEAKING
            </h2>
            <p className="mt-4 max-w-md text-deep-foreground/75">
              Share a brief note and I&apos;ll get back to you within a few days.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-2xl border border-gold/20 bg-deep-foreground/5 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="collab-name" className="text-deep-foreground/90">
                    Name
                  </Label>
                  <Input
                    id="collab-name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="border-gold/20 bg-deep-foreground/5 text-deep-foreground placeholder:text-deep-foreground/40 focus-visible:border-gold/50 focus-visible:ring-gold/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="collab-email" className="text-deep-foreground/90">
                    Email
                  </Label>
                  <Input
                    id="collab-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="border-gold/20 bg-deep-foreground/5 text-deep-foreground placeholder:text-deep-foreground/40 focus-visible:border-gold/50 focus-visible:ring-gold/30"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="collab-message" className="text-deep-foreground/90">
                  Message
                </Label>
                <Textarea
                  id="collab-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, study or invitation…"
                  className="border-gold/20 bg-deep-foreground/5 text-deep-foreground placeholder:text-deep-foreground/40 focus-visible:border-gold/50 focus-visible:ring-gold/30"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="gold"
                className="mt-6 w-full sm:w-auto"
                disabled={sending}
              >
                <Send className="size-4" />
                LET&apos;S INNOVATE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
