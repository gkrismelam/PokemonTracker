import images from "../assets/images";
import pokemonData from "../assets/datasets/pokemon.json"

export interface Pokemon {
	dexNumber: number;
	name: string;
	image: string;
	collected: boolean;
}

function Card() {
	const pokemonList: Pokemon[] = [];
	for (let i = 1; i <= 1025; i++) {
		pokemonList.push({
			dexNumber: i,
			name: pokemonData.pokemon[i.toString()].N.charAt(0).toUpperCase() + pokemonData.pokemon[i.toString()].N.slice(1),
			image: i.toString().padStart(4, "0"),
			collected: false,
		});
	}

	const currentIndex: number = 1024;

	return (
		<div>
			<h2>{pokemonList[currentIndex - 1].name}</h2>
			<h2>{pokemonList[currentIndex - 1].dexNumber}</h2>
			<h2>{pokemonList[currentIndex - 1].collected ? "Collected" : "Not Collected"}</h2>
			<img src={images[pokemonList[currentIndex - 1].image]} alt={pokemonList[currentIndex].name} />
		</div>
	);
}

export default Card;