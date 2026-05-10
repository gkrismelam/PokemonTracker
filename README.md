# Pokémon Tracker

A React + TypeScript web application for tracking collected Pokémon across all 9 current generations.

## Features

* Track collected Pokémon from Generations 1–9 in a card layout
* Search Pokémon by:
  * Name
  * Pokédex number
  * Partial/fuzzy matching
* Smooth scrolling to searched Pokémon and animated highlight effect
* Local storage support to preserve collection progress
* GitHub Pages deployment support

## Technologies Used

* React
* TypeScript
* Vite
* CSS
* GitHub Pages

## Installation

Clone the repository:

```bash
git clone https://github.com/gkrismelam/PokemonTracker.git
cd PokemonTracker
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal.

## Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

## Search Functionality

The search bar supports:

* Exact name matches
* Pokédex number matches
* Partial/fuzzy searching

Examples:

* `pikachu`
* `pika`
* `25`

## Local Storage

Collection progress is automatically saved in the browser using local storage.

No account or database is required.

## Future Improvements

Potential future additions:

* Filters by generation
* Type filtering
* Shiny collection tracking
* Dark mode
* Sorting options
* Collection statistics

## License

This project is for educational and personal use.
