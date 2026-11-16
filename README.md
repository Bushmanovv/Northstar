# Northstar — Engineering Roadmap Tracker

A clean, responsive, deployable learning dashboard for a 12-month journey across networking, infrastructure, cloud, DevOps and cybersecurity.

## Features
- 4 phases, 12 modules and individual completion checkboxes
- Security-specific task tracking embedded throughout the curriculum
- Progress bars, circular completion chart and next-action suggestions
- 4 portfolio projects with deliverables and completion tracking
- 26 curated clickable learning resources, with search and topic filters
- 12-hour weekly planner (automatically begins a new set of checkboxes each Monday)
- Notes, JSON export/import, and automatic browser-based saving
- Responsive design for desktop, tablet and phone

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. Extract this project folder.
2. Push it to a GitHub repository (include `package-lock.json`, if present).
3. On [vercel.com/new](https://vercel.com/new), choose **Import Git Repository**.
4. Select the repository. Vercel should automatically detect **Next.js**.
5. Leave the default build command (`next build`) and deploy.

No environment variables or database setup required.

## Where progress is stored

All user progress is saved locally in the current browser's `localStorage` under the key `northstar-roadmap-v1`. It survives normal page reloads and browser restarts, but **will not sync across devices** and may be lost if browser data is cleared. Use **Settings & backup → Export backup** periodically; JSON import restores it.

If multi-device syncing is later required, connect a hosted database and authentication (for example, Supabase). That is deliberately not part of this lightweight version.

## Customize

- Learning tasks, modules, phase definitions, links and projects: `lib/data.ts`
- Styling and design tokens: `app/globals.css`
- UI, tracking and persistence: `app/page.tsx`
- Page metadata: `app/layout.tsx`

## Safety note

All cybersecurity projects should use isolated machines, permitted lab environments, and explicit authorization. Keep intentionally vulnerable machines away from clinical/production and corporate networks.

## License

Personal and educational use. Course/trademark names belong to their respective owners.
