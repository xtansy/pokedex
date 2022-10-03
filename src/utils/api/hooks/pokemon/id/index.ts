import { useQuery } from "@tanstack/react-query";
import { requestPokemon } from "../../../requests";

interface UseRequestPokemonQueryParams {
    id: number;
}

export const useRequestPokemonQuery = ({
    params,
    config,
}: RequestQueryParams<UseRequestPokemonQueryParams>) => {
    return useQuery(
        ["pokemon", params.id],
        () => requestPokemon({ params: { id: params.id } }),
        config
    );
};
