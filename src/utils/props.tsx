import type { Dispatch, SetStateAction } from "react";
import type { Pokemon } from "./types";

export type CardProps = {
	pokemonList: Pokemon[],
	setPokemonList: Dispatch<SetStateAction<Pokemon[]>>;
}