# Development Setup

This project now supports both a standalone Spotify Clone app and Storybook for component development.

## Running the Spotify Clone App

To run the Spotify clone as a standalone application:

```bash
npm run dev
# or
yarn dev
```

This will start the Vite dev server on **http://localhost:3000/**

## Running Storybook

To run Storybook for component development and documentation:

```bash
npm run storybook
# or
yarn storybook
```

This will start Storybook on **http://localhost:9000/**

## Project Structure

- `app/` - Vite app entry point
  - `main.tsx` - App entry file
  - `index.css` - Global styles
- `stories/` - Storybook stories and components
  - `spotify-clone.tsx` - Spotify clone component
  - `spotify-clone.scss` - Spotify clone styles
  - `spotify-clone.stories.js` - Storybook story
- `src/` - Audio player library components
- `index.html` - HTML entry for Vite app
- `vite.config.ts` - Vite configuration

## Available Scripts

- `npm run dev` - Start Vite dev server (Spotify clone app)
- `npm run storybook` - Start Storybook dev server
- `npm run build` - Build the library
- `npm run build:storybook` - Build Storybook for deployment
- `npm test` - Run tests
- `npm run lint` - Lint code

## Notes

- The Spotify clone uses the H5AudioPlayer library from the `src/` directory
- The app runs on port 3000 by default (configurable in `vite.config.ts`)
- Storybook runs on port 9000 (configurable in package.json)
