# joshc.uk

The personal site, portfolio and blog of Josh Cooper!

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/cooperj/joshc.uk)

![Website Screenshot](./.assets/site.png)

## Colour Palette

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 500 100" xml:space="preserve">
    <rect fill="#0d1821" x="0" y="0" width="100" height="100"/>
    <rect fill="#61988e" x="100" y="0" width="100" height="100"/>
    <rect fill="#2a4d14" x="200" y="0" width="100" height="100"/>
    <rect fill="#f0f4ef" x="300" y="0" width="100" height="100"/>
    <rect fill="#ff9f1c" x="400" y="0" width="100" height="100"/>
</svg>

[Generated with coolors.co](https://coolors.co/0d1821-61988e-2a4d14-f0f4ef-ff9f1c)

## 🚀 Project Structure

This project is built using Astro. You'll see the following folders and files:

```text
├── .devcontainer/
|   └── devcontainer.json     # <--- This enables cool stuff like devcontainers and codespaces
├── public/
|   ├── .well-known/
|   ├── demos/
|   ├── favicons/
|   ├── files/
|   └── images/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro`, `.md`, `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                |
| :------------------------ | :---------------------------------------------------- |
| `npm install`             | Installs dependencies                                 |
| `npm run dev`             | Starts local dev server at `localhost:4321`           |
| `npm run build`           | Build your production site to `./dist/`               |
| `npm run preview`         | Preview your build locally, before deploying          |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`      |
| `npm run astro -- --help` | Get help using the Astro CLI                          |
| `npm run lint`            | Calls prettier and lints all the files in the project |
