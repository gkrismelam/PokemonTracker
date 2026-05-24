import pokemonData from "./assets/datasets/pokemon.json"
import type { Pokemon } from "./utils/types"
import Cards from './components/Cards';
import Header from './components/Header'
import { useState, useEffect, useRef } from 'react';
import './App.css'; 

function App() {
	// Creates list of Pokemon type from dex numbers 1 to 1025 with names from pokemon.json
	const allPokemon: Pokemon[] = Object.keys(pokemonData.pokemon)
	.filter((key) => Number(key) >= 1 && Number(key) <= 1025)
	.map((key) => {
		const p = pokemonData.pokemon[key];

		return {
			dexNumber: Number(key),
			name: p.N.charAt(0).toUpperCase() + p.N.slice(1),
			image: key.padStart(4, "0"),
			collected: false,
			typeOne: p.T[0].n,
			typeTwo: p.T[1]?.n ?? "",
			set: "",
			rarity: "",
		};
	});

	// Sets up useState for list of Pokemon made earlier and also local storage
	const [pokemonState, setPokemonState] = useState<Pokemon[]>(() => {
		const saved = localStorage.getItem("pokemonState");
		return saved ? JSON.parse(saved) : allPokemon;
	});

	// Saves local storage when state changes
	useEffect(() => {
		localStorage.setItem("pokemonState", JSON.stringify(pokemonState));
	}, [pokemonState]);

	const pokemonList: Pokemon[] = pokemonState;

	// Create mutable referance for storing location of scroll for each pokemon
	const pokemonRefs = useRef<Record<number, HTMLDivElement | null>>({});

	// State for highlighting searched pokemon
	const [highlighted, setHighlighted] = useState<number | null>(null);

	// Finds pokemon and gets dex number to look up DOM node and scrolls to it
	function scrollToPokemon(dexNumber: number) {
		const el = pokemonRefs.current[dexNumber];
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	}

	// Takes search from Header.tsx based on name and dex number and scrolls to it if found via DOM location
	function handleSearch(query: string) {
		const q = query.toLowerCase().trim();

		const found = pokemonList
			.map((p) => {
				const name = p.name.toLowerCase();
				const dex = p.dexNumber.toString();

				let score = 0;

				// exact match (best)
				if (name === q || dex === q) {
					score = 100;
				}
				// starts with match
				else if (name.startsWith(q)) {
					score = 80;
				}
				// includes match (fuzzy)
				else if (name.includes(q)) {
					score = 50;
				}
				// dex partial match
				else if (dex.includes(q)) {
					score = 40;
				}

				return { p, score };
			})
			.filter((x) => x.score > 0)
			.sort((a, b) => b.score - a.score)[0]?.p;

		// Scrolls to and highlights pokemon for search
		if (found) {
			scrollToPokemon(found.dexNumber);
			setHighlighted(found.dexNumber)

			// Removes highlight after 2 seconds
			setTimeout(() => {
				setHighlighted(null);
			}, 2000);
		}
	}

	function clearSave() {
		setPokemonState(allPokemon);
		localStorage.removeItem("pokemonState");
	}

	return (
		<div className="App">
			<Header
				pokemonList={pokemonList}
				onSearch={handleSearch}
				onClear={clearSave}
			/>
			<Cards 
				pokemonList={pokemonList}
				setPokemonState={setPokemonState}
				pokemonRefs={pokemonRefs}
				highlighted={highlighted}
			/>
		</div>
	)
}

export default App
