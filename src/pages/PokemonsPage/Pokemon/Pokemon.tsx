import React from "react";

interface PokemonProps {
    pokemon: any;
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
    return (
        <div className="shadow-md p-7 rounded mr-20 mb-20 ">
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
