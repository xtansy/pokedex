import { useQuery } from "@tanstack/react-query";

import { requestPokemonSpecies } from "../requests/";

interface UseRequestSpeciesQueryParams {
    id: number;
}

export const useRequestSpeciesQuery = (
    params: RequestParams<UseRequestSpeciesQueryParams>,
    settings?: RequestQuerySettings<typeof requestPokemonSpecies>
) => {
    return useQuery(
        ["species", params.id],
        () => requestPokemonSpecies({ params: { id: params.id } }),
        settings?.options
    );
};
