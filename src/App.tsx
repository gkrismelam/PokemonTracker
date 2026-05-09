import pokemonData from "./assets/datasets/pokemon.json"
import type { Pokemon } from "./utils/types"
import Card from './components/Card';
import Header from './components/Header'
import { useState, useEffect } from 'react';
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

	return (
		<div className="App">
			<Header
				pokemonList={pokemonList}
			/>
			<Card 
				pokemonList={pokemonList}
				setPokemonList={setPokemonList}
			/>
		</div>
	)
}

export default App
