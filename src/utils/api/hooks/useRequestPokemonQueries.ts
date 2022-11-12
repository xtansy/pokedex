import { requestPokemon } from "../requests";
import { useQueries } from "@tanstack/react-query";

interface UseRequestPokemonQueriesProps {
    offset: number;
}

// UNUSED!
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
