<p align="center">
  <h1 align="center">Positivus Landing Page</h1>

  <p align="center">
    A modern, responsive landing page for <strong>Positivus</strong> — a digital marketing agency. Built with React and Tailwind CSS, featuring a dark theme with vibrant green accents.
    <br />
    <a href="https://udayige.github.io/positivus/" target="_blank" ><strong>Live Demo »</strong></a>
    <br />
    <br />
    <a href="#features">Features</a>
    ·
    <a href="#prerequisites">Prerequisites</a>
    ·
    <a href="#project-structure">Project Structure</a>
    .
    <a href="#license">License</a>
    ·
    <a href="https://github.com/UdayIge/positivus/issues">Issues</a>
  </p>
</p>


![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwind-css)

## Features

- **Responsive design** — Mobile-first layout with breakpoints for tablet and desktop
- **Navbar** — Sticky navigation with mobile menu, green hover states on links
- **Hero / Header** — Introductory section with CTA
- **Company Logos** — Trusted partners or clients strip
- **Services** — Showcase of digital marketing offerings
- **Working Process** — Step-by-step overview of how the agency works
- **Testimonials** — Speech-bubble styled carousel with Swiper (author & position outside cards)
- **Footer** — Links, contact info, and branding
- **Smooth scrolling** — In-page navigation

## Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) 6
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Swiper](https://swiperjs.com/) — Testimonials carousel
- [React Icons](https://react-icons.github.io/react-icons/) — Icons

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/UdayIge/positivus.git
cd positivus

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # Reusable UI (Button, SectionHeading, etc.)
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── Services.jsx
│   ├── Testimonials.jsx
│   └── ...
├── assets/          # Images and static assets
├── data.jsx         # Static data (nav links, testimonials, etc.)
├── App.jsx
├── main.jsx
└── index.css        # Global styles, Tailwind, custom CSS
```

## License

Distributed under the MIT License. See `LICENSE` for more info.

---

<p align="center">
  Built by <a href="https://github.com/UdayIge">@UdayIge</a>
</p>
