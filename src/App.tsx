import pokemonData from "./assets/datasets/pokemon.json"
import { useState } from 'react';
import Card from './components/Card';
import './App.css'; 

export interface Pokemon {
	dexNumber: number;
	name: string;
	image: string;
	collected: boolean;
}

function App() {

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

	const [pokemonList, setPokemonList] = useState<Pokemon[]>(allPokemon);

	return (
		<div className="App">
			<Card 
				pokemonList={pokemonList}
				setPokemonList={setPokemonList}
			/>
		</div>
	)
}

export default App
