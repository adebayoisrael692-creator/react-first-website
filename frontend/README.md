# TRVL — Travel & Adventure

A responsive React website featuring a video hero, destination cards, navigation, and a footer. The project uses Vite for development and production builds.

## Requirements

- Node.js **20.19.0 or newer in the 20.x line**, or **22.12.0 or newer in the 22.x line** (Node 22 LTS recommended)
- npm **10 or newer**

Check your installed versions:

```bash
node --version
npm --version
```

## Install dependencies

Run this from the project root (the folder containing `package.json`):

```bash
npm install
```

## Start the development server

```bash
npm start
```

Open the local URL printed in your terminal, usually <http://localhost:5173>.

## Create a production build

```bash
npm run build
```

The optimized website will be generated in the `dist/` folder.

## Preview the production build

```bash
npm run preview
```

## Project structure

```text
public/                 Static images, videos, icons, and manifest
src/
  components/            Reusable navigation, hero, cards, buttons, and footer
  components/pages/     Home, Services, Products, and Sign Up pages
  App.js                 Application routes
  index.js               React entry point
  App.css                Global and page styles
index.html               Vite HTML entry point
vite.config.js            Vite configuration
package.json              Project scripts and dependencies
```

## Troubleshooting

- Run commands from the folder that contains `package.json`.
- Use `npm run build` (not `npm build`) to create the production build.
- If dependencies become corrupted, close the development server, delete `node_modules` and `package-lock.json`, then run `npm install` again.
- If the app still reports a Node.js version error, upgrade Node.js to 20.19.0+ (20.x) or 22.12.0+ (22.x) and reopen your terminal.
