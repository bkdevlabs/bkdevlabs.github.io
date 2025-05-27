# BKDevLabs Website

A modern, accessible, and mobile-optimized website for BKDevLabs built with Astro.

## 🚀 Features

- **Three Core Services**: Tutorials, Products/Projects, and Web Development Consultancy
- **Blog System**: Full-featured blog with markdown support
- **Mobile Optimized**: Responsive design that works on all devices
- **Accessibility First**: Built with WCAG guidelines in mind
- **Performance Focused**: Lightning-fast static site generation with Astro
- **Modern Tech Stack**: Astro, Tailwind CSS, TypeScript

## 📁 Project Structure

```
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/        # Blog posts and content collections
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── package.json        # Project dependencies
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🎨 Customization

### Logo
The logo is included as an inline SVG in the Header component. You can also save it as `/public/logo.svg` for use as a favicon.

### Colors
The color scheme uses:
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Text: Dark Gray (#1F2937)

These can be customized in `tailwind.config.mjs`.

### Content
- Add blog posts in `/src/content/blog/` as markdown files
- Update service information in the respective page files
- Modify navigation items in the Navigation component

## 📝 Blog Posts

Create new blog posts by adding markdown files to `/src/content/blog/`:

```markdown
---
title: Your Post Title
description: A brief description
date: "2024-01-20"
author: Your Name
tags: ["Web Development", "Tutorial"]
---

Your content here...
```

## 🌐 Deployment

The site can be deployed to any static hosting service:

1. Build the site: `npm run build`
2. Deploy the `dist/` folder to your hosting service

Popular options:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

## 📄 License

This project is open source and available under the MIT License.