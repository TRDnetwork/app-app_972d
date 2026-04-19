# Portfolio Pro

A minimal personal portfolio site showcasing projects and skills with clean, warm design.

## Overview

Portfolio Pro is a static personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. It features a hero section, an about paragraph, and three project cards — all styled with a warm minimalist aesthetic using organic tones, editorial typography, and subtle animations.

This site is fully client-side rendered and requires no backend, database, or authentication. It's optimized for performance, accessibility, and responsive design across devices.

---

## ✨ Features

- **Hero Section**: Prominent display of name, title, and call-to-action button
- **About Section**: A concise descriptive paragraph to introduce yourself
- **Project Cards**: Three responsive cards with titles, descriptions, and live demo links
- **Responsive Design**: Mobile-first layout using Tailwind’s breakpoint system
- **Scroll Animations**: Smooth fade-in and slide-up effects powered by **Framer Motion**
- **Accessibility & A11y**: Semantic HTML, proper contrast ratios, and focus indicators
- **Performance Optimized**: Lightweight, no external scripts beyond Tailwind CDN

---

## 🎨 Design Specs

### Aesthetic Direction
Warm minimalism with organic contrast: editorial serif typography on soft beige, grounded by deep forest green and burnt orange accents.

### Color Palette
| Role        | Color       |
|------------|-------------|
| Background | `#faf8f5`   |
| Text       | `#1a2e1a`   |
| Dim Text   | `#6b5e53`   |
| Accent     | `#e66000`   |
| Alt Accent | `#ff8c42`   |
| Surface    | `#ffffff`   |

### Typography
- **Headings**: `Satoshi`, with `-0.05em` letter spacing
- **Body**: `Fraunces`, medium weight, 1.6 line height
- **Hierarchy**: Clear typographic scale from `h1` → `h2` → body → caption

---

## ⚙️ Tech Stack

| Layer       | Technology               |
|-----------|--------------------------|
| Framework | React + Vite             |
| Styling   | Tailwind CSS (CDN)       |
| Animation | Framer Motion            |
| Hosting   | Vercel (or any static host) |
| Fonts     | Satoshi (Display), Fraunces (Body) |

---

## 📁 Folder Structure

```
app_972d/
├── index.html               # Main HTML template with Tailwind config
├── src/
│   ├── main.tsx             # React entry point
│   ├── components/
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   ├── About.tsx        # About paragraph section
│   │   ├── ProjectCard.tsx  # Reusable project card
│   │   └── Layout.tsx       # Page wrapper with container
│   └── App.tsx              # Root App component
├── public/
│   └── vite.svg             # Favicon
├── db/schema.sql            # Empty — no DB needed
└── README.md                # This file
```

---

## 🚀 Setup & Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Install & Run Locally

```bash
# Clone the repo (or create your project folder)
npm create vite@latest my-portfolio --template react-ts
cd my-portfolio

# Copy the provided files into your project
# Replace index.html, src/App.tsx, src/main.tsx, etc.
```

Install dependencies:
```bash
npm install
```

Add Framer Motion:
```bash
npm install framer-motion
```

Start dev server:
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🌐 Deployment

Deploy to **Vercel** in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git)

Or use any static site host (Netlify, GitHub Pages, etc.).

No build secrets or environment variables required.

---

## 🧪 Acceptance Criteria

✅ All content renders without JavaScript errors  
✅ Project cards are clickable and open demo links in a new tab  
✅ Fully responsive on mobile, tablet, and desktop  
✅ Animations trigger on scroll with smooth transitions  
✅ Accessible navigation and focus states

---

## 📝 Notes

- **No Backend Required**: This is a static site. No Supabase, Express, or API routes.
- **Fonts**: Uses Satoshi and Fraunces via Google Fonts (ensure they're loaded if not using local fonts).
- **Animations**: Implemented via Framer Motion’s `useInView` and `animate` for scroll-triggered effects.
- **Styling**: All Tailwind customizations (colors, fonts, keyframes) are defined in `<script>` block in `index.html`.

---

## 🔍 Troubleshooting

| Issue | Solution |
|------|---------|
| Fonts not loading | Add `<link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@700&family=Fraunces:opsz@9..144&display=swap" rel="stylesheet">` to `<head>` |
| Animations not working | Ensure `framer-motion` is installed and components are wrapped in `motion.div` |
| Tailwind not applying | Confirm CDN script is present and `tailwind.config` is correctly set |
| Layout overflow on mobile | Check container padding and use `overflow-x-hidden` if needed |

---

Made with ❤️ using TRD·ASI standards: warm minimalism, performance, and clarity.

---

## 🏷️ License

MIT — Free to use, modify, and deploy.

---