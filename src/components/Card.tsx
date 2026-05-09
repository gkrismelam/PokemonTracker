import bulbasaurImage from "../assets/images/0001.png";

export interface Pokemon {
	dexNumber: number;
	name: string;
	image: string;
	collected: boolean;
}

function Card() {
	const bulbasaur: Pokemon = {
		dexNumber: 1,
		name: "Bulbasaur",
		image: bulbasaurImage,
		collected: false,
	};

	return (
		<div>
			<h2>{bulbasaur.name}</h2>
			<h2>{bulbasaur.dexNumber}</h2>
			<h2>{bulbasaur.collected ? "Collected" : "Not Collected"}</h2>
			<img src={bulbasaur.image} alt={bulbasaur.name} />
		</div>
	);
}

export default Card;