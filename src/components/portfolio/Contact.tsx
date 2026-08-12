import { useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/portfolio";
import { Section } from "./Section";

export function Contact() {
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
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app", {
      description: "Your message is prefilled and ready to send.",
    });
    form.reset();
    setSending(false);
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk water"
      description="Open to consulting on hydrology, water and sanitary design, and guest lectures."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="card-hover flex items-center gap-4 rounded-xl border border-border/70 bg-card p-5 shadow-soft"
          >
            <Mail className="size-5 shrink-0 text-primary" />
            <span className="min-w-0 truncate text-sm font-medium">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="card-hover flex items-center gap-4 rounded-xl border border-border/70 bg-card p-5 shadow-soft"
          >
            <Phone className="size-5 shrink-0 text-primary" />
            <span className="min-w-0 truncate text-sm font-medium">{profile.phone}</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card-hover flex items-center gap-4 rounded-xl border border-border/70 bg-card p-5 shadow-soft"
          >
            <Linkedin className="size-5 shrink-0 text-primary" />
            <span className="min-w-0 truncate text-sm font-medium">LinkedIn profile</span>
          </a>
          <div className="flex items-start gap-4 rounded-xl border border-border/70 bg-surface p-5">
            <MapPin className="size-5 shrink-0 text-primary" />
            <span className="text-sm text-muted-foreground">{profile.location}</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border/70 bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project, study or invitation…"
            />
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={sending}>
            <Send className="size-4" />
            Send message
          </Button>
        </form>
      </div>
    </Section>
  );
}
