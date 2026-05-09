import pokemonData from "./assets/datasets/pokemon.json"
import type { Pokemon } from "./utils/types"
import Card from './components/Card';
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
		};
	});

	// Sets up useState for list of Pokemon made earlier and also local storage
	const [pokemonList, setPokemonList] = useState<Pokemon[]>(() => {
		const saved = localStorage.getItem("pokemonList");
	
		if (saved) {
			return JSON.parse(saved);
		}
	
		return allPokemon;
	});

	// Saves local storage when state changes
	useEffect(() => {
		localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
	}, [pokemonList]);

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
		const found = pokemonList.find(
			(p) =>
				p.name.toLowerCase() === query.toLowerCase() ||
				p.dexNumber.toString() === query
		);
	
		if (found) {
			scrollToPokemon(found.dexNumber);
			setHighlighted(found.dexNumber)
		}
	}

	return (
		<div className="App">
			<Header
				pokemonList={pokemonList}
				onSearch={handleSearch}
			/>
			<Card 
				pokemonList={pokemonList}
				setPokemonList={setPokemonList}
				pokemonRefs={pokemonRefs}
				highlighted={highlighted}
			/>
		</div>
	)
}

export default App
