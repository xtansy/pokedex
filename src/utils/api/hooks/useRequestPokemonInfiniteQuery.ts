import { requestPokemons } from "../requests";
import { useInfiniteQuery } from "@tanstack/react-query";

const REQUEST_POKEMONS_LIMIT = 50;
export const useRequestPokemonInfiniteQuery = () => {
    return useInfiniteQuery(
        ["pokemon"],
        ({ pageParam = 0 }) =>
            requestPokemons({
                params: { offset: pageParam, limit: REQUEST_POKEMONS_LIMIT },
            }),
        {
            getNextPageParam: (lastPage, allPages) => {
                const pokemonCount = allPages.length * REQUEST_POKEMONS_LIMIT;
                const hasNextPage = pokemonCount < lastPage.data.count;
                if (hasNextPage) return pokemonCount;
            },
        }
    );
};
