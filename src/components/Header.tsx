import type { HeaderProps } from "../utils/props";
import { useState } from "react";
import "../css/Header.css"

function Header( {pokemonList, onSearch}: HeaderProps ) {

    // The state for storing the value inside the search bar
    const [search, setSearch] = useState("");

    // Gets total number of collected pokemon in constant
    const totalCollected = pokemonList.reduce((acc, curr) => {
        return acc + (curr.collected ? 1 : 0)
    }, 0)

    // Sends value stored in search to App.tsx
    function handleSubmit() {
        onSearch(search);
        setSearch("");
    }

    return(
        <div className="header">
            <h1>Pokemon Tracker</h1>
            <h2 className="subtext">
                Collected: {totalCollected}/{pokemonList.length}
            </h2>

            <div className="search-container">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                    placeholder="Search Pokémon (name or number)"
                />

                <button onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Header;