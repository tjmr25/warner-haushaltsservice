# Tim Maier WebApp Template

This is a premium boilerplate designed for developing frontend-only client websites using Astro and Tailwind CSS v4.

## 🚀 What's different from the standard Astro boilerplate?

Unlike the barebones `npm create astro@latest` basic template, this starter kit is loaded with professional features tailored for client agency work:

1. **Tailwind CSS v4 Included**: Configured natively using the official `@tailwindcss/vite` plugin.
2. **Robust Design System**: Pre-configured with a comprehensive custom color palette setup (Primary, Secondary, Tertiary, Neutral) in `src/styles/global.css` using the new `@theme` directive.
3. **Local Fonts Built-In**: Configured with `@fontsource/manrope` and `@fontsource/newsreader`, fully integrated into the Tailwind configuration.
4. **Prettier Setup**: Automatically formats Astro and Tailwind classes via installed Prettier plugins (`prettier-plugin-astro`, `prettier-plugin-tailwindcss`).
5. **SEO Ready**: `Layout.astro` dynamically handles `title`, `description`, and `canonical` meta tags. Both `@astrojs/sitemap` integration and a base `public/robots.txt` are included to guarantee search engine visibility out of the box.
6. **Layout Architecture**: `Layout.astro` is already wired up with global CSS, fonts, `<Header />`, and `<Footer />`.
7. **Page Transitions**: Integrated with Astro's `<ClientRouter />` for immediate SPA-like page navigations.
8. **Error Handling**: Contains a styled `404.astro` catch-all page.
9. **Icons & Linting**: Out of the box support for `astro-icon` and `eslint` (including `eslint-plugin-astro` and `eslint-plugin-jsx-a11y` for built-in accessibility checks).

## 📂 File Structure

```text
/
├── public/                 # Static assets copied directly to the build folder
│   ├── robots.txt          # SEO instructions for web crawlers
│   ├── favicon.svg         # Site favicon
│   └── favicon.ico
├── src/                    # Main source code
│   ├── components/         # Reusable UI parts
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/            # Page wrappers (e.g., handles <head> and common UI)
│   │   └── Layout.astro    # The main global layout requiring SEO props
│   ├── pages/              # File-based routing (e.g., index.astro -> /)
│   │   └── index.astro     # The homepage
│   └── styles/             # Global stylesheets
│       └── global.css      # Core Tailwind v4 setup + Color & Font themes
├── astro.config.mjs        # Astro configuration & integrations (like sitemap)
├── tailwind_cheatsheet.md  # Handy reference for Tailwind utility classes
└── package.json            # Node.js dependencies & scripts
```

## 🧞 Commands

Run all commands from the root directory in your terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🛠️ Next Steps for a New Customer Project

When cloning this template for a new client, follow these exact steps:

1. **Set the Domain:**
   Open `astro.config.mjs` and alter the `site` property to the customer's production URL (e.g., `https://customer-domain.com`). This is required for the sitemap to generate properly.

2. **Update SEO & Robots:**
   - Open `public/robots.txt` and replace the placeholder domain in the `Sitemap:` URL at the bottom of the file.
   - Replace `public/favicon.svg` and `public/favicon.ico` with the client's logo. Update the `<link rel="apple-touch-icon">` map in `Layout.astro` if necessary.
   - Add a default social fallback image to your `public` directory and add `<meta property="og:image" content={new URL('/fallback.jpg', Astro.url)}> ` to the `<head>` of your `Layout.astro`.

3. **Customize the Design System:**
   Open `src/styles/global.css`. Edit the hex codes for the `--color-primary-*`, `--color-secondary-*`, `--color-tertiary-*`, and `--color-neutral-*` variables to match your client's brand guidelines. Because these are mapped in the `@theme` directive, the entire site will instantly adopt the new colors via Tailwind utility classes.

4. **Change the Fonts (If Needed):**
   If the client uses different fonts, uninstall the current `@fontsource` packages and install the new ones. Update the imports in `src/layouts/Layout.astro` and remap `--font-sans` and `--font-news` in `src/styles/global.css`.

5. **Start Building Pages:**
   Modify `src/pages/index.astro`, wrap content in `<Layout title="Client Home">`, and begin using standard HTML tags and Tailwind classes to build out the site!
