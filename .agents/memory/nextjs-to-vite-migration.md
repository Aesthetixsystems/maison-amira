---
name: Next.js to Vite migration patterns
description: Recurring conversions needed when porting a Vercel/Next.js static site into a react-vite artifact
---

When porting a Next.js App Router static/marketing site into a react-vite artifact:
- `next/image` with `fill` prop has no Vite equivalent — replace with a plain `<img>` wrapped in a `relative` parent, using `absolute inset-0 h-full w-full object-cover` (plus `object-position` inline style if the original used `objectPosition`).
- `fullstack_copy_frontend.sh` copies public assets and tailwind config but does NOT copy `app/`/`components/` when the Next.js source has a flat (non-`src/`) layout — component/page files must be copied and adapted manually.
- The scaffolded `src/App.tsx` in a fresh react-vite artifact includes QueryClientProvider/Toaster/TooltipProvider by default — drop these if the ported page is static with no data fetching or toast usage, to avoid dead weight.

**Why:** These are the parts of the copy-script workflow that silently leave stale/placeholder content behind if not manually checked.
**How to apply:** After running the frontend copy script for a Next.js migration, diff `app/page.tsx` and `components/` against what landed in `src/`, and grep for `next/image` usage to convert.
