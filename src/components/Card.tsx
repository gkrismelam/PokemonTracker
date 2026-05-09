import images from "../assets/images";
import type { CardProps } from "../utils/props";
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


			<h1>Generation 1: Kanto</h1>
			<div className="card-organizer">
				{pokemonList.slice(0, 151).map((pokemon) => (
					<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
						<h2>{pokemon.dexNumber}</h2>
						<h2>{pokemon.name}</h2>
						<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
					</div>
				))}
			</div>


			<h1>Generation 2: Johto</h1>
			<div className="card-organizer">
				{pokemonList.slice(151, 251).map((pokemon) => (
					<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
						<h2>{pokemon.dexNumber}</h2>
						<h2>{pokemon.name}</h2>
						<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
					</div>
				))}
			</div>

			<h1>Generation 3: Hoenn</h1>
			<div className="card-organizer">
				{pokemonList.slice(251, 386).map((pokemon) => (
					<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
						<h2>{pokemon.dexNumber}</h2>
						<h2>{pokemon.name}</h2>
						<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
					</div>
				))}
			</div>


			<h1>Generation 4: Sinnoh</h1>
			<div className="card-organizer">
				{pokemonList.slice(386, 493).map((pokemon) => (
					<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
						<h2>{pokemon.dexNumber}</h2>
						<h2>{pokemon.name}</h2>
						<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
					</div>
				))}
			</div>

			<h1>Generation 5: Unova</h1>
			<div className="card-organizer">
				{pokemonList.slice(493, 649).map((pokemon) => (
					<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
						<h2>{pokemon.dexNumber}</h2>
						<h2>{pokemon.name}</h2>
						<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
					</div>
				))}
			</div>

			<h1>Generation 6: Kalos</h1>
			<div className="card-organizer">
				{pokemonList.slice(649, 721).map((pokemon) => (
					<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
						<h2>{pokemon.dexNumber}</h2>
						<h2>{pokemon.name}</h2>
						<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
					</div>
				))}
			</div>

			<h1>Generation 7: Alola</h1>
			<div className="card-organizer">
				{pokemonList.slice(721, 809).map((pokemon) => (
					<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
						<h2>{pokemon.dexNumber}</h2>
						<h2>{pokemon.name}</h2>
						<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
					</div>
				))}
			</div>

			<h1>Generation 8: Galar</h1>
			<div className="card-organizer">
				{pokemonList.slice(809, 905).map((pokemon) => (
					<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
						<h2>{pokemon.dexNumber}</h2>
						<h2>{pokemon.name}</h2>
						<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
					</div>
				))}
			</div>

			<h1>Generation 9: Paldea</h1>
			<div className="card-organizer">
				{pokemonList.slice(905, 1025).map((pokemon) => (
					<div className={`card ${pokemon.collected ? "collected" : "not-collected"}`} key={pokemon.dexNumber} onClick={() => changeCollected(pokemon.dexNumber)}>
						<h2>{pokemon.dexNumber}</h2>
						<h2>{pokemon.name}</h2>
						<img className="pokemon-image" src={images[pokemon.image]} alt={pokemon.name} />
					</div>
				))}
			</div>
			
		</div>
	);
}

export default Card;