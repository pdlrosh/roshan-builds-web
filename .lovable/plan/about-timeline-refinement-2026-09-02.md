# About Timeline Refinement

## Goal
Make the "Path to Sustainable Impact" timeline more readable and visually cohesive by removing the centered portrait and replacing it with a thematic icon, while increasing the card text sizes.

## Changes

1. **Remove the centered portrait**
   - Delete the `<img>` portrait element from the center vision card in `src/components/portfolio/About.tsx`.
   - Keep the surrounding vision card structure (eyebrow, statement, icon cluster) so the timeline spine still has a centered anchor.

2. **Replace the portrait with a thematic vision icon**
   - Add a large, centered icon above the `HeroMarks` cluster — use `Target`, `Compass`, or a water-themed icon from `lucide-react`.
   - Keep the existing gold `HeroMarks` (water / leaf / globe) directly below it to maintain brand continuity.

3. **Increase timeline text sizes**
   - Milestone title: `text-lg` → `text-xl` (`font-semibold`).
   - Milestone body points: `text-sm` → `text-base`.
   - Center vision statement: `text-base` → `text-lg`.
   - Keep the eyebrow label as `text-eyebrow` but ensure it does not feel smaller than the body after the bump.

4. **Adjust spacing**
   - Reduce vertical padding around the center vision card since the portrait is gone.
   - Ensure the center spine still visually connects the top and bottom milestones cleanly.

5. **Verify**
   - Run the build check.
   - Capture a screenshot of the About section to confirm readability and balance.
