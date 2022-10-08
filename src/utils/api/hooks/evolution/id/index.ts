import { useQuery } from "@tanstack/react-query";
import { requestEvolution } from "../../../requests";

interface UseRequestEvolutionQueryParams {
    id: Pokemon["id"];
}

export const useRequestEvolutionQuery = (
    params: RequestParams<UseRequestEvolutionQueryParams>,
    settings?: RequestQuerySettings<typeof requestEvolution>
) => {
    return useQuery(
        ["evolution", params.id],
        () =>
            requestEvolution({
                params: { id: params.id },
                config: settings?.config,
            }),
        settings?.options
    );
};
