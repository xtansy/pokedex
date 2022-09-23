import { useState } from "react";
import Pokemon from "./Pokemon/Pokemon";
import { useRequestPokemonQueries } from "../../utils/api/hooks/pokemon";

const PokemonsPage = () => {
    const [offset, setOffset] = useState(20);

    const results = useRequestPokemonQueries(offset);

    const pokemons = results.map((item) => item.data?.data);

    const isLoading = results.some((item) => item.isLoading);

    if (isLoading) return null;

    return (
        <div className="container mt-10">
            <button onClick={() => setOffset(offset + 20)}>
                ДОБАВИТЬ ЕЩЕ 20
            </button>
            <div className="flex justify-center flex-wrap">
                {pokemons.map((item, i) => {
                    return <Pokemon pokemon={item} key={i} />;
                })}
            </div>
        </div>
    );
};

export default PokemonsPage;
