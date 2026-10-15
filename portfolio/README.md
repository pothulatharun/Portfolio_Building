# Tharun's developer portfolio

A responsive React portfolio built with Vite, Tailwind CSS 4, Lucide icons, and Framer Motion.

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local URL in the terminal. Create and check the production build with:

```sh
npm run build
npm run preview
```

## Personalize the portfolio

Edit `src/data/portfolio.js` to update the name, role, introduction, email, profile links, resume URL, education, skills, and project descriptions or links. Keep profile and repository URLs empty until you have the correct URLs; empty project URLs are intentionally not rendered.

To enable the resume buttons, add your PDF as `public/resume.pdf` and set `resumeUrl` to `/resume.pdf`. To enable the contact email link, set `email` to the address you want visitors to use. The contact form currently validates its fields in the browser but is a demo only: it does not send or store messages. Connect a form provider or backend before relying on it to receive submissions.

Only add verified achievements to the `achievements` array. Project cards, skill categories, and education are all driven by this configuration file.

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel, import the repository and set the **Root Directory** to `portfolio`.
3. Use the defaults: install command `npm install`, build command `npm run build`, and output directory `dist`.
4. Deploy. Future pushes to the connected branch will trigger new deployments.

No environment variables are required for the portfolio as currently configured.
