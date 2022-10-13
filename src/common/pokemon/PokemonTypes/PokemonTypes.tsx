import React from "react";
import styles from "./PokemonTypes.module.css";
import { PokemonType } from "../PokemonType/PokemonType";

interface PokemonTypesProps {
    types: PokemonType[];
}

export const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => {
    return (
        <ul className={styles.pokemon_types}>
            {types.map((item, i) => {
                return <PokemonType key={i} type={item.type} />;
            })}
        </ul>
    );
};
