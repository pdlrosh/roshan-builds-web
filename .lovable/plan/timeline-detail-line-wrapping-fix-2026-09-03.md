# Timeline Detail Line Wrapping Fix

## Goal
Keep the credential/detail text on the same visual line as its label in the About timeline cards, so the address or institution doesn't awkwardly wrap.

## Changes
1. In `src/components/portfolio/About.tsx`, adjust the list item layout for milestone points.
   - Keep the `font-medium` label in a non-wrapping inline segment.
   - Render the `·` separator and detail inline so the browser treats them as one line.
   - Add `whitespace-nowrap` (or `flex-nowrap` on a flex wrapper) to the detail segment so the institution/location stays on the same line as the label whenever width allows, and only breaks at natural points for very narrow screens.

2. Verify the change on desktop and mobile widths.
   - Check that the "IHE Delft, the Netherlands" detail no longer drops below its bullet point alone.
   - Ensure mobile still wraps gracefully when the full combined line is too wide.

## Notes
- No text content changes; only layout and wrapping rules.
- No navigation or section additions/removals.
