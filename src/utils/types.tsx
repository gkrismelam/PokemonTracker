// Pokemon type which includes its dex number, name, path to image, and collected status
export interface Pokemon {
	dexNumber: number;
	name: string;
	image: string;
    collected: boolean;
	typeOne: string;
	typeTwo: string;
}