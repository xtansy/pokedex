import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useRequestPokemonInfiniteQuery } from "../../utils/api/hooks/pokemon";
import { getPokemonId } from "../../utils/helpers";
import { PokemonInfo, PokemonModal } from "../../common";

import styles from "./PokemonsPage.module.css";

export const PokemonsPage = () => {
    const [pokemonId, setPokemonId] = useState<Pokemon["id"] | null>(null);

    const { isLoading, data, fetchNextPage } = useRequestPokemonInfiniteQuery();

    const { ref, inView } = useInView();

    const pokemons = data?.pages.reduce(
        (result: NamedAPIResource[], { data }) => [...result, ...data.results],
        []
    );

    const onClosePokemonModal = () => {
        setPokemonId(null);
    };

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView]);

    if (isLoading || !pokemons) return null;

    return (
        <div className="container mt-10">
            <div className="flex justify-between flex-wrap">
                {pokemons.map((item, i) => {
                    const id = i + 1;
                    return (
                        <div key={i}>
                            <div
                                onClick={() => setPokemonId(id)}
                                // className="relative"
                            >
                                <div className={styles.pokemon_infoblock}>
                                    <p>{getPokemonId(id)}</p>
                                    <h2>{item.name}</h2>
                                </div>
                            </div>
                            {/* {pokemonId === id && (
                                <PokemonInfo
                                    onClose={() => setPokemonId(null)}
                                    id={id}
                                />
                            )} */}
                        </div>
                    );
                })}
                <PokemonModal
                    onClose={onClosePokemonModal}
                    visible={!!pokemonId}
                    id={pokemonId}
                />
                <div ref={ref} />
            </div>
        </div>
    );
};
