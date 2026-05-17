# Portfolio Mubacs v2.0

![Portfolio Mubacs v2.0](https://img.shields.io/badge/Portfolio-Mubacs%20v2.0-black?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

A creative personal portfolio website built from scratch using React, TypeScript, Vite, Tailwind CSS, Three.js, GSAP, Framer Motion, and Cloudflare Workers.

This portfolio is designed to present development projects, visual works, creative experiments, and interactive web experiences through smooth motion, WebGL visuals, page transitions, and a modern user interface.

## Live Website

```txt
https://mubacs.site
````

## Repository

```txt
https://github.com/Mubax5/portfolio-mubacs-v.2.0
```

## Overview

Portfolio Mubacs v2.0 is a personal portfolio project focused on combining software development, visual design, and motion interaction in one website.

The website includes:

* A creative landing page
* Development portfolio pages
* Visual portfolio pages
* Project detail pages
* WebGL visual elements
* Smooth scroll interaction
* Custom cursor interaction
* Page transition effects
* Animated text and motion components
* Cloudflare deployment configuration

## Main Features

### 1. Creative Portfolio Interface

The website is built with a modern portfolio layout that highlights personal branding, selected works, and creative direction.

### 2. Development Portfolio

Contains sections and pages for showcasing development-related projects, case studies, and technical works.

### 3. Visual Portfolio

Includes visual or creative work sections for design, media, and other visual explorations.

### 4. WebGL and 3D Elements

The project uses Three.js, React Three Fiber, and Drei to support interactive WebGL-based visuals and visual effects.

### 5. Smooth Motion Experience

Motion and animation are handled using GSAP, Framer Motion, and Lenis to create a smoother, more expressive browsing experience.

### 6. Custom Cursor

A custom cursor component improves the interactive feel of the website and supports a more creative browsing experience.

### 7. Single Page Application Routing

React Router DOM is used to handle multiple portfolio pages while keeping the project as a modern SPA.

### 8. Cloudflare Ready

The project includes `wrangler.toml`, making it ready for deployment with Cloudflare Workers Assets.

## Tech Stack

### Frontend

* React 18
* TypeScript
* Vite
* React Router DOM
* Tailwind CSS

### Animation and Interaction

* GSAP
* @gsap/react
* Framer Motion
* Lenis Smooth Scroll

### WebGL / 3D

* Three.js
* React Three Fiber
* Drei

### Icons and UI Support

* Lucide React

### Deployment

* Cloudflare Workers
* Wrangler
* Workers Assets

## Project Structure

```txt
portfolio-mubacs-v.2.0/
├── src/
│   ├── components/
│   │   ├── CapabilityKineticList.tsx
│   │   ├── CreativeCategoryIndex.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── DevProjectIndex.tsx
│   │   ├── EditorialGallery.tsx
│   │   ├── FeaturedProjectSlider.tsx
│   │   ├── FooterContact.tsx
│   │   ├── GlobalTextMotion.tsx
│   │   ├── HeroStage.tsx
│   │   ├── InfiniteWarpGallery.tsx
│   │   ├── MagneticLink.tsx
│   │   ├── ManifestoScene.tsx
│   │   ├── Navigation.tsx
│   │   ├── PageTransition.tsx
│   │   ├── ParallaxSection.tsx
│   │   ├── SmoothScrollProvider.tsx
│   │   └── WebGLOpening.tsx
│   │
│   ├── data/
│   │   └── Project and portfolio data
│   │
│   ├── pages/
│   │   ├── CreativeCategoryPage.tsx
│   │   ├── CreativeOrganizationPage.tsx
│   │   ├── DevProjectDetail.tsx
│   │   ├── MainPage.tsx
│   │   ├── PortoDev.tsx
│   │   └── PortoVisual.tsx
│   │
│   ├── styles/
│   │   └── Global styles
│   │
│   ├── utils/
│   │   └── Utility functions
│   │
│   ├── webgl/
│   │   ├── DistortionPlane.tsx
│   │   └── WebGLBackground.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── vite.config.ts
├── wrangler.toml
├── mubtutor.md
└── README.md
```

## Credits

Designed and developed from scratch by **Mubacs / Mubax5**.

This project was created as a personal creative portfolio to showcase development work, visual exploration, motion interaction, and WebGL-based web experiences.

### Built With

- React
- TypeScript
- Vite
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- GSAP
- Framer Motion
- Lenis
- Lucide React
- Cloudflare Workers

### Creator

```txt
Name: Mubacs / Mubax5
GitHub: https://github.com/Mubax5
Website: https://mubacs.site
