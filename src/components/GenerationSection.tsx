import images from "../assets/images";
import type { GenerationSectionProps } from "../utils/props";
import "../css/GenerationSection.css"

function GenerationSection( {title, pokemonList, changeCollected}: GenerationSectionProps ){

    // Simplifies Card.tsx to not rewrite each individual generation
    return (
        <div className="generation-section">
			<h1>{title}</h1>
			<div className="card-organizer">
				{pokemonList.map((pokemon) => (
					<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
						<h2>{pokemon.dexNumber}</h2>
						<h2>{pokemon.name}</h2>
						<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
					</div>
				))}
			</div>
        </div>
    )
}

export default GenerationSection;