import images from "../assets/images";
import pokemonData from "../assets/datasets/pokemon.json"
import { useState } from "react";
import "../css/Card.css"

export interface Pokemon {
	dexNumber: number;
	name: string;
	image: string;
	collected: boolean;
}

function Card() {
	
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

	function changeCollected(dexNumber: number) {
		setPokemonList((prev) =>
			prev.map((p) =>
				p.dexNumber === dexNumber
					? { ...p, collected: !p.collected }
					: p
			)
		);
	}

	const [pokemonList, setPokemonList] = useState<Pokemon[]>(allPokemon);

	return (
		<div className="card-organizer">
			{pokemonList.map((pokemon) => (
				<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
					<h2>{pokemon.name}</h2>
					<h2>{pokemon.dexNumber}</h2>
					<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
				</div>
			))}
		</div>
	);
}

export default Card;