# React Resume Template

A single-page, print-ready resume template built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. Designed to look like an A4 sheet of paper, fully responsive on mobile, and deployable to [Vercel](https://vercel.com) in minutes.

**Fork it. Fill in your data. Deploy.**

## Features

- **One-file customisation** -- all resume content lives in a single TypeScript file (`src/data/resume.ts`).
- **Type-safe** -- TypeScript interfaces catch structural mistakes before you even save.
- **Print-ready** -- `Ctrl+P` produces a clean PDF with no extra work.
- **Themeable** -- change the accent colour, fonts, and palette by editing 6 CSS variables.
- **Optional sections** -- Projects, Publications, and Languages sections render only when data is present.
- **Responsive** -- two-column layout on desktop, single column on mobile.
- **Favicon badges** -- automatically fetches site favicons for company and project links.
- **Accessible** -- semantic HTML, proper heading hierarchy, ARIA attributes.
- **Fast** -- Vite builds in seconds, zero runtime dependencies beyond React.

## Quick Start

```bash
# 1. Fork this repo on GitHub (click the "Fork" button above)

# 2. Clone your fork
git clone https://github.com/<your-username>/react-resume-template.git
cd react-resume-template

# 3. Use Node 22
nvm use 22

# 4. Install dependencies
npm install

# 5. Install pre-commit hooks (requires: pip install pre-commit)
pre-commit install --hook-type pre-commit --hook-type commit-msg

# 6. Start the dev server
npm run dev

# 7. Open http://localhost:5173 and start editing src/data/resume.ts
```

## Customising Your Resume

### Step 1 -- Edit your data

Open **`src/data/resume.ts`** and replace the placeholder content with your own. The TypeScript types in `src/types/resume.ts` guide you through every field:

```ts
export const resumeData: ResumeData = {
  name: "Your Name",
  title: "Your Title",
  summary: "A brief professional summary...",
  contact: {
    email: "you@example.com",
    phone: "+1 (555) 000-0000", // optional
    portfolio: "https://yoursite.dev", // optional
    location: "City, Country", // optional
    github: "yourusername", // optional
    linkedin: "yourusername", // optional
  },
  experience: [
    /* ... */
  ],
  education: [
    /* ... */
  ],
  skills: [
    /* ... */
  ],
  // Optional sections -- omit or leave empty to hide:
  projects: [
    /* ... */
  ],
  publications: [
    /* ... */
  ],
  languages: [
    /* ... */
  ],
};
```

### Step 2 -- Change the page title

Edit the `<title>` tag in **`index.html`**:

```html
<title>Your Name - Resume</title>
```

### Step 3 -- Customise the theme (optional)

See [docs/theming.md](docs/theming.md) for how to change the accent colour, background, fonts, and full palette. All it takes is editing 6 CSS variables in `src/index.css`.

### Adding a work experience entry

Add an entry to the `experience` array in `src/data/resume.ts`:

```ts
{
  company: "Acme Corp",
  companyUrl: "https://acme.com",   // optional -- makes the name a link
  location: "Paris",                // optional
  role: "Senior Engineer",
  period: "2024 - Present",
  promotions: "Promoted in 2025",   // optional
  bullets: [
    { text: "Led migration to microservices architecture." },
  ],
}
```

### Adding a project

Add an entry to the `projects` array:

```ts
{
  name: "My Project",
  url: "https://github.com/you/my-project", // optional
  description: "A brief description of what this project does.",
  tech: ["React", "Node.js", "PostgreSQL"],
}
```

### Adding the PDF download button

1. Export your resume as PDF (e.g. via `Ctrl+P` > Save as PDF).
2. Place the file at `public/resume.pdf`.
3. Set `pdfUrl` in `src/data/resume.ts`:

```ts
pdfUrl: "/resume.pdf",
```

A floating download button appears in the bottom-right corner. The URL is also directly shareable -- anyone visiting `https://yoursite.com/resume.pdf` downloads the PDF immediately.

### Adding a new section

1. Define a type in `src/types/resume.ts` and add the field to `ResumeData`.
2. Create a component in `src/components/` (use `Section` as a wrapper for consistent styling).
3. Export it from `src/components/index.ts`.
4. Drop it into `src/App.tsx`.

## Project Structure

```
public/
└── resume.pdf                   # Your PDF (served at /resume.pdf)
src/
├── types/resume.ts              # TypeScript interfaces for all resume data
├── data/resume.ts               # Single source of truth for CV content
├── components/
│   ├── index.ts                 # Barrel export
│   ├── Section.tsx              # Reusable section wrapper (heading + divider)
│   ├── Header.tsx               # Name, title, contact links
│   ├── DownloadButton.tsx       # Floating PDF download button
│   ├── ProfessionalSummary.tsx  # Summary / objective paragraph
│   ├── WorkExperience.tsx       # Job entries with bullets and promotions
│   ├── EducationSection.tsx     # Degree entries
│   ├── Skills.tsx               # Skill pills grouped by category
│   ├── Projects.tsx             # Notable projects with tech-stack pills
│   ├── Publications.tsx         # Academic / conference publications
│   ├── Languages.tsx            # Spoken languages with proficiency
│   └── Favicon.tsx              # Auto-fetched website favicon badges
├── App.tsx                      # Page layout (two-column desktop, stacked mobile)
├── main.tsx                     # React entry point
└── index.css                    # Tailwind v4 theme tokens and base styles
```

## Deploy to Vercel

### Option A -- One-click deploy (recommended)

1. **Fork** this repository to your own GitHub account.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Click **"Import Git Repository"** and select your fork.
4. Vercel auto-detects Vite. Accept the defaults:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**.
6. Your resume is live. Every push to `main` triggers a new deploy automatically.

### Option B -- Vercel CLI

```bash
# 1. Install the Vercel CLI globally
npm install -g vercel

# 2. Build the project
npm run build

# 3. Deploy to production
vercel --prod
```

On first run, the CLI will walk you through linking to a Vercel project. After that, `vercel --prod` is all you need.

### Option C -- GitHub Actions + Vercel

If you prefer CI-driven deployments, add these secrets to your GitHub repository settings:

| Secret              | Where to find it                                               |
| ------------------- | -------------------------------------------------------------- |
| `VERCEL_TOKEN`      | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID`     | `.vercel/project.json` after running `vercel link`             |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` after running `vercel link`             |

Then create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: --prod
```

### Custom domain

After deploying, go to your Vercel project **Settings > Domains** and add your custom domain. Vercel handles SSL certificates automatically.

## Exporting to PDF

1. Open your deployed resume (or `http://localhost:5173` locally).
2. Press `Ctrl+P` (or `Cmd+P` on macOS).
3. Set **Destination** to "Save as PDF".
4. Set **Margins** to "None" for the cleanest output.
5. Save.

The print stylesheet is built-in -- no extra configuration needed.

## Tech Stack

| Layer     | Tool            |
| --------- | --------------- |
| Framework | React 19        |
| Language  | TypeScript 5    |
| Styling   | Tailwind CSS v4 |
| Bundler   | Vite 7          |
| Runtime   | Node 22         |

## Documentation

- [Theming & Colour Customisation](docs/theming.md) -- how to change the accent colour, background, fonts, and swap the entire palette.
- [Project Guidelines](docs/guidelines.md) -- architecture, component conventions, styling rules, commit format.
- [Contributing](CONTRIBUTING.md) -- how to set up, what to work on, and how to submit a PR.

## License

This project is licensed under the [MIT License](LICENSE). Fork it, use it, make it yours.
