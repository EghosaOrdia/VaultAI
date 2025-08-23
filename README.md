# The Vault: AI-Powered Movie Recommendation System

The Vault is an AI-powered movie recommendation system built with React, TypeScript, and Vite. It helps users discover movies tailored to their tastes using a smart, interactive questionnaire and recommendations based on their favorite films, genres, and preferences.

## Features

- 🎬 Personalized movie recommendations
- 🤖 AI-driven suggestions based on your favorites, genres, and more
- ⚡ Fast, modern UI with React 19 and Vite
- 🎨 Styled with Tailwind CSS and custom fonts
- 🔍 Integrates with The Movie Database (TMDB) API

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/eghosaordia/thevault.git
   cd thevault
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**

   - Copy `.env.example` to `.env` and add your TMDB API key:
     ```
     VITE_MOVIE_API_KEY=your_tmdb_api_key_here
     ```

4. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` — Start the development server with hot reload
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint

## Project Structure

- `src/` — Main source code
  - `components/` — React components for each questionnaire step
  - `constants/` — Static data and TypeScript interfaces
  - `services/` — API integration (e.g., TMDB search)
  - `assets/` — Fonts and images

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Lucide Icons](https://lucide.dev/)
- [TMDB API](https://www.themoviedb.org/documentation/api)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT

---

_VaultAI is a work in progress. We’d love your [feedback](#)!_
