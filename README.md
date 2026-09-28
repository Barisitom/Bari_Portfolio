# Barisitom Akpee | Portfolio

A responsive, accessible personal portfolio for **Barisitom Akpee**, a Frontend Web Developer based in Port Harcourt, Nigeria. It presents my skills, projects, experience and education, and includes a working dark/light theme and a validated contact form.

**Live site:** [add your deployed URL here]

## Overview

I'm transitioning from a career as a pharmacy technician into software development. This portfolio is both my personal brand and a demonstration of the frontend fundamentals I've built through structured study (Brigham Young University–Idaho, Web & Computer Programming) and hands-on projects.

## Features

- Responsive layout for mobile, tablet and desktop
- Dark mode by default with a light mode toggle (preference saved in `localStorage`)
- Sticky navigation that changes on scroll, with a mobile hamburger menu
- Hero section with an entrance animation and floating technology badges
- Animated statistics counters
- Skills grouped by category (frontend, backend, database, tools)
- Project cards generated from a single JavaScript data array
- Experience timeline and education section
- Contact form with client-side validation and accessible error messages
- Respects `prefers-reduced-motion`
- Semantic HTML, visible focus states, ARIA attributes and SEO/Open Graph metadata

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts: Space Grotesk and Inter

No frameworks or build step are required.

## Project Structure

```
portfolio/
├── index.html    # Page structure and content
├── styles.css    # Design tokens, layout, themes, responsive rules
├── script.js     # Navigation, theme toggle, counters, projects, form validation
└── README.md
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Barisitom/<repo-name>.git
cd <repo-name>

# Option 1: open index.html directly in your browser
# Option 2: serve it locally
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customization

- **Colors and fonts:** edit the CSS variables at the top of `styles.css`.
- **Projects:** edit the `projects` array in `script.js` (name, description, technologies, GitHub and demo links).
- **Personal details:** update the placeholders in `index.html` (email, phone, CV link, canonical URL).
- **Contact form:** currently validates only. Connect it to a service such as Formspree, Web3Forms or EmailJS, or your own backend, by sending the form data with `fetch()` in `script.js`. Never place secret API keys in frontend code.

## Deployment

Because the site is static, it can be deployed to GitHub Pages, Netlify or Vercel. After deploying, update the canonical URL and Open Graph tags in `index.html`.

## Featured Projects

| Project | Technologies |
|---|---|
| Heaven's Touch Solution | HTML, CSS, JavaScript, Tailwind CSS |
| Community Fitness & Wellness Center | HTML, CSS, JavaScript |
| CSE Motors | Node.js, Express, EJS, JavaScript |
| SleepOutside | HTML, CSS, JavaScript |
| Service Network | Node.js, Express.js, EJS, PostgreSQL |
| Personal Fitness & Nutrition Tracker | JavaScript, API Integration, HTML, CSS |

## Roadmap

- Case-study pages for each project
- Live GitHub repository feed using the GitHub API
- Real project screenshots
- Working contact form backend

## Accessibility

Built with semantic HTML, keyboard-friendly controls, visible focus indicators, sufficient color contrast and reduced-motion support.

## Contact

- GitHub: [github.com/Barisitom](https://github.com/Barisitom)
- LinkedIn: [Barisitom Akpee](https://www.linkedin.com/in/barisitom-akpee-100455375/)
- Location: Port Harcourt, Nigeria

## License

[Choose a license, e.g. MIT, or remove this section]

© 2026 Barisitom Akpee. Built with passion, code and continuous learning.
