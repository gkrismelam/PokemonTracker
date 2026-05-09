import type { CardProps } from "../utils/props";
import GenerationSection from "./GenerationSection";
import "../css/Card.css"

function Card( {pokemonList, setPokemonList}: CardProps ) {

	// Function that changes collected status to inverse called on clicking each card
	function changeCollected(dexNumber: number) {
		setPokemonList((prev) =>
			prev.map((p) =>
				p.dexNumber === dexNumber ? { ...p, collected: !p.collected } : p
			)
		);
	}

	return (
		<div className="container">

			<GenerationSection
				title="Generation 1: Kanto"
				pokemonList={pokemonList.slice(0, 151)}
				changeCollected={changeCollected}
			/>

			<GenerationSection
				title="Generation 2: Johto"
				pokemonList={pokemonList.slice(152, 251)}
				changeCollected={changeCollected}
			/>

			<GenerationSection
				title="Generation 3: Hoenn"
				pokemonList={pokemonList.slice(251, 386)}
				changeCollected={changeCollected}
			/>

			<GenerationSection
				title="Generation 4: Sinnoh"
				pokemonList={pokemonList.slice(386, 494)}
				changeCollected={changeCollected}
			/>

			<GenerationSection
				title="Generation 5: Unova"
				pokemonList={pokemonList.slice(493, 649)}
				changeCollected={changeCollected}
			/>

			<GenerationSection
				title="Generation 6: Kalos"
				pokemonList={pokemonList.slice(649, 721)}
				changeCollected={changeCollected}
			/>

			<GenerationSection
				title="Generation 7: Alola"
				pokemonList={pokemonList.slice(721, 809)}
				changeCollected={changeCollected}
			/>

			<GenerationSection
				title="Generation 8: Galar"
				pokemonList={pokemonList.slice(809, 905)}
				changeCollected={changeCollected}
			/>

			<GenerationSection
				title="Generation 9: Paldea"
				pokemonList={pokemonList.slice(905, 1025)}
				changeCollected={changeCollected}
			/>

		</div>
	);
}

export default Card;