import { useQueries } from "@tanstack/react-query";
import { requestPokemon } from "../../requests/pokemon/id";

export const useRequestPokemonQueries = (offset: number) => {
    return useQueries({
        queries: Array.from({ length: offset }).map((_, index) => ({
            queryKey: ["pokemon", index + 1],
            queryFn: () => requestPokemon({ params: { id: index + 1 } }),
        })),
    });
};
