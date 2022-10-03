import React from "react";
import styles from "./Pokemon.module.css";

interface PokemonProps {
    pokemon: any;
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
    return (
        <div className={styles.pokemon_block}>
            <img
                className="w-full"
                src={pokemon.sprites.front_default}
                alt="pokemon img"
            />
            <h2 className="text-3xl">{pokemon.name}</h2>
        </div>
    );
};

export default Pokemon;
