import { requestPokemons, requestPokemon } from "../../requests";
import { useInfiniteQuery, useQueries } from "@tanstack/react-query";

interface UseRequestPokemonQueriesProps {
    offset: number;
}
export const useRequestPokemonQueries = ({
    offset,
}: UseRequestPokemonQueriesProps) => {
    return useQueries({
        queries: Array.from({ length: offset }).map((_, index) => ({
            queryKey: ["pokemon", index + 1],
            queryFn: () => requestPokemon({ params: { idOrName: index + 1 } }),
        })),
    });
};

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
