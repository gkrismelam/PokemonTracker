import type { HeaderProps } from "../utils/props";
import "../css/Header.css"

function Header( {pokemonList}: HeaderProps ) {

    const totalCollected = pokemonList.reduce((acc, curr) => {
        return acc + (curr.collected ? 1 : 0)
    }, 0)

    return(
        <div className="header">
            <h1>Pokemon Tracker</h1>
            <div className="subtext">
                Collected: {totalCollected}/{pokemonList.length}
            </div>
        </div>
    )
}

export default Header;