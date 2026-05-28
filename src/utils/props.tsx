import type { Dispatch, SetStateAction } from "react";
import type { Pokemon } from "./types";

// Card component props
export type CardProps = {
	pokemonList: Pokemon[],
	setPokemonState: Dispatch<SetStateAction<Pokemon[]>>,
	pokemonRefs: React.RefObject<Record<number, HTMLDivElement | null>>;
	highlighted: number | null;
	tcgEnabled: boolean;
}

// Header component props
export type HeaderProps = {
    pokemonList: Pokemon[],
	onSearch: (query: string) => void;
	onClear: () => void;
	tcgEnabled: boolean;
	setTcgEnabled: Dispatch<SetStateAction<boolean>>;
}

// Generation Section component props
export type GenerationSectionProps = {
	title: string;
    pokemonList: Pokemon[];
    changeCollected: (dexNumber: number) => void;
	pokemonRefs: React.RefObject<Record<number, HTMLDivElement | null>>;
	highlighted: number | null;
	tcgEnabled: boolean;
}