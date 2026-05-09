import images from "../assets/images";
import type { GenerationSectionProps } from "../utils/props";
import "../css/GenerationSection.css"

function GenerationSection( {title, pokemonList, changeCollected, pokemonRefs}: GenerationSectionProps ){

    // Simplifies Card.tsx to not rewrite each individual generation
    return (
        <div className="generation-section">
			<h1>{title}</h1>
			<div className="card-organizer">
				{pokemonList.map((pokemon) => (
                    // Stores DOM node in dictionary with dex number 
					<div ref={(el) => {
                        pokemonRefs.current[pokemon.dexNumber] = el;
                    }}
                    
                    // Updates visibility depended on collected status
                    className={`card ${pokemon.collected ? "collected" : "not-collected"}`} 
                    key={pokemon.dexNumber} 

                    // Changed collected status
                    onClick={() => changeCollected(pokemon.dexNumber)}
                    >
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