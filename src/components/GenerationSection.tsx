import images from "../assets/images/index";
import types from "../assets/type-icons/typeIndex"
import type { GenerationSectionProps } from "../utils/props";
import "../css/GenerationSection.css"

function GenerationSection({ title, pokemonList, changeCollected, pokemonRefs, highlighted }: GenerationSectionProps) {
    // Simplifies Card.tsx to not rewrite each individual generation
    return (
        <div className="generation-section">
            <h1>{title}</h1>
            <div className="card-organizer">
                {pokemonList.map((pokemon, index) => {
                    return (
                        // Stores DOM node in dictionary with dex number 
                        <div
                            ref={(el) => {
                                pokemonRefs.current[pokemon.dexNumber] = el;
                            }}
                            style={{ "--i": index } as React.CSSProperties}
                            className={`card ${pokemon.collected ? "collected" : "not-collected"} ${highlighted === pokemon.dexNumber ? "highlighted" : ""}`}
                            key={pokemon.dexNumber}
                            onClick={() => changeCollected(pokemon.dexNumber)}
                        >
                            <div className={`card-inner ${pokemon.collected ? "flipped" : ""}`}>

                                {/* FRONT */}
                                <div className="card-front">
                                    <h2>{pokemon.dexNumber}</h2>
                                    <h2>{pokemon.name}</h2>

                                    <div className="type-row">
                                        <img className={`type-icon ${pokemon.typeOne}`} src={types[pokemon.typeOne]} />
                                        {pokemon.typeTwo !== "" && (
                                            <img className={`type-icon ${pokemon.typeTwo}`} src={types[pokemon.typeTwo]} />
                                        )}
                                    </div>

                                    <img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
                                </div>

                                {/* BACK */}
                                <div className="card-back">
                                    <p>{pokemon.name}</p>
                                    <p>Set: {pokemon.set}</p>
                                    <p>Rarity: {pokemon.rarity}</p>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GenerationSection;