import type { HeaderProps } from "../utils/props";
import { useState } from "react";
import type { Pokemon } from "../utils/types";
import "../css/Header.css"

function Header( {pokemonList, onSearch, onClear}: HeaderProps ) {

    // The state for storing the value inside the search bar
    const [search, setSearch] = useState("");

    // The state for TCG toggle
    const [tcgEnabled, setTcgEnabled] = useState(false);

    // Gets total number of collected pokemon in constant
    const totalCollected = pokemonList.reduce((acc, curr) => {
        return acc + (curr.collected ? 1 : 0)
    }, 0)

    // Sends value stored in search to App.tsx
    function handleSubmit() {
        onSearch(search);
        setSearch("");
    }

    function exportSave() {
        const dataStr = JSON.stringify(pokemonList, null, 2);
    
        const blob = new Blob([dataStr], {
            type: "application/json",
        });
    
        const url = URL.createObjectURL(blob);
    
        const link = document.createElement("a");
        link.href = url;
        link.download = "pokemon-tracker-save.json";
    
        link.click();
    
        URL.revokeObjectURL(url);
    }

    function importSave(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
    
        if (!file) return;
    
        const reader = new FileReader();
    
        reader.onload = (e) => {
            try {
                const importedData: Pokemon[] = JSON.parse(
                    e.target?.result as string
                );
    
                localStorage.setItem(
                    "pokemonState",
                    JSON.stringify(importedData)
                );
    
                window.location.reload();
            } catch {
                alert("Invalid save file.");
            }
        };
    
        reader.readAsText(file);
    }

    function handleClear() {
        if (confirm("Reset all Pokémon progress?")) {
            onClear();
        }
    }

    return(
        <div className="header">

            <h1>Pokémon Tracker</h1>

            <h2 className="subtext">
                Collected: {totalCollected}/{pokemonList.length}
            </h2>

            <div className="header-row">
                <div className="tcg-toggle">
                    <span>TCG</span>

                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={tcgEnabled}
                            onChange={() => setTcgEnabled(!tcgEnabled)}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                <div className="search-center">
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

                <div className="save-controls">
                    <button onClick={exportSave}>
                        Export
                    </button>

                    <label className="import-button">
                        Import
                        <input
                            type="file"
                            accept=".json"
                            onChange={importSave}
                            hidden
                        />
                    </label>

                    <button onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>
            <div className="pokeball-decoration" />
        </div>
    )
}

export default Header;