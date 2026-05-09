import images from "../assets/images";
import type { Pokemon } from "../App.tsx"
import type { Dispatch, SetStateAction } from "react";
import "../css/Card.css"

type CardProps = {
	pokemonList: Pokemon[],
	setPokemonList: Dispatch<SetStateAction<Pokemon[]>>;
}

function Card( {pokemonList, setPokemonList}: CardProps ) {

	function changeCollected(dexNumber: number) {
		setPokemonList((prev) =>
			prev.map((p) =>
				p.dexNumber === dexNumber
					? { ...p, collected: !p.collected }
					: p
			)
		);
	}

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