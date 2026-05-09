import type { Dispatch, SetStateAction } from "react";
import type { Pokemon } from "./types";

// Card component props
export type CardProps = {
	pokemonList: Pokemon[],
	setPokemonList: Dispatch<SetStateAction<Pokemon[]>>,
	pokemonRefs: React.RefObject<Record<number, HTMLDivElement | null>>;
	highlighted: number | null;
}

// Header component props
export type HeaderProps = {
    pokemonList: Pokemon[],
	onSearch: (query: string) => void;
}

// Generation Section component props
export type GenerationSectionProps = {
	title: string;
    pokemonList: Pokemon[];
    changeCollected: (dexNumber: number) => void;
	pokemonRefs: React.RefObject<Record<number, HTMLDivElement | null>>;
	highlighted: number | null;
}