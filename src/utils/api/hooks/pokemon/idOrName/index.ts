import { useQuery } from "@tanstack/react-query";
import { requestPokemon } from "../../../requests";

interface UseRequestPokemonQueryParams {
    idOrName: number | Pokemon["name"];
}

export const useRequestPokemonQuery = (
    params: RequestParams<UseRequestPokemonQueryParams>,
    settings?: RequestQuerySettings<typeof requestPokemon>
) => {
    return useQuery(
        ["pokemon", params.idOrName],
        () =>
            requestPokemon({
                params: { idOrName: params.idOrName },
                config: settings?.config,
            }),
        settings?.options
    );
};
