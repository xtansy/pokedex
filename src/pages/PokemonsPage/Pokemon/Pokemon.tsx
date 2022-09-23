import React from "react";
import { useRequestPokemonQuery } from "../../../utils/api/hooks/pokemon";

interface PokemonProps {
    id: number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
    const pokemon = useRequestPokemonQuery(id);

    console.log(pokemon);

    return <div>{id}</div>;
};

export default Pokemon;
