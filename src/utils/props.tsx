import type { Dispatch, SetStateAction } from "react";
import type { Pokemon } from "./types";

// Card component props
export type CardProps = {
	pokemonList: Pokemon[],
	setPokemonList: Dispatch<SetStateAction<Pokemon[]>>,
}

// Header component props
export type HeaderProps = {
    pokemonList: Pokemon[],
}