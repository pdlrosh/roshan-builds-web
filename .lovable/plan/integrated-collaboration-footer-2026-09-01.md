# Integrated Collaboration Footer

Add a new footer-style call-to-action section above the existing simple footer. It should feel like a natural extension of the hero's deep-blue + gold visual language.

## Layout

```text
+-------------------------------------------------------------+
|  [water/leaf/globe icon stack — subtle background]            |
|                                                             |
|  CONNECT FOR IMPACT          |  INQUIRE FOR COLLABORATION    |
|                              |  OR SPEAKING                  |
|  ┌────────────────────┐      |  ┌─────────────────────────┐  |
|  │ LinkedIn icon      │      |  │ Name              Email │  |
|  │ Professional       │      |  │                         │  |
|  │ Network            │      |  │ Message                 │  |
|  └────────────────────┘      |  │                         │  |
|  ┌────────────────────┐      |  │ [LET'S INNOVATE]        │  |
|  │ Google Scholar icon│      |  └─────────────────────────┘  |
|  │ Research Profile   │                                       |
|  └────────────────────┘                                       |
|  ┌────────────────────┐                                       |
|  │ Email icon         │                                       |
|  │ Direct Email       │                                       |
|  └────────────────────┘                                       |
+-------------------------------------------------------------+
```

- Desktop: two-column layout, left "Connect for Impact" cards, right inquiry form.
- Mobile: stacked, cards first, then form.
- Deep-blue section background (`--deep` / `--ink`) with a subtle gold icon stack watermark between the panels.
- The existing minimal `SiteFooter` stays below it as the legal/copyright strip.

## Visual style

- Background: deep professional blue (`--deep` or `--ink`), using the same palette as the hero overlay.
- Gold accents: card icons, button, section eyebrow, and the background watermark use the existing `--gold` / `--gradient-gold` tokens.
- Cards: semi-transparent deep surface with a thin gold-tinted border and hover lift.
- Form: clean two-field layout (name + email on one row, message below) with dark inputs and a gold "LET'S INNOVATE" button.
- Background watermark: the existing `HeroMarks` icon cluster rendered at low opacity behind the content, centered between the two panels.

## Content

- Section eyebrow: "Connect"
- Left title: "CONNECT FOR IMPACT"
- Cards:
  - LinkedIn → "Professional Network" → links to `profile.linkedin`
  - Google Scholar → "Research Profile" → links to `profile.publications`
  - Email → "Direct Email" → `mailto:profile.email`
- Right title: "INQUIRE FOR COLLABORATION OR SPEAKING"
- Form fields: Name, Email, Message
- Submit button: "LET'S INNOVATE"

## Technical notes

- New component: `src/components/portfolio/CollaborationFooter.tsx`
- Reuse `HeroMarks` for the background icon stack (low opacity).
- Reuse existing `Button`, `Input`, `Label`, `Textarea` from the design system.
- Wire the form with the same mailto handler currently used in `Contact.tsx`.
- Insert the new section between `<Contact />` and `<SiteFooter />` in `src/routes/index.tsx`.
- No changes to the existing `Contact` section unless the user later asks to replace it.
