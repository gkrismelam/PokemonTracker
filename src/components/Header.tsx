import type { HeaderProps } from "../utils/props";

function Header( {pokemonList}: HeaderProps ) {
    
    const totalCollected = pokemonList.reduce((acc, curr) => {
        return acc + (curr.collected ? 1 : 0)
    }, 0)

    return(
        <div>
            {totalCollected}/{pokemonList.length}
        </div>
    )
}

export default Header;