import { useQuery } from "@tanstack/react-query";
import { requestEvolution } from "../../../requests";

interface UseRequestEvolutionQueryParams {
    id: number;
}

export const useRequestEvolutionQuery = ({
    params,
    config,
}: RequestQueryParams<UseRequestEvolutionQueryParams>) => {
    return useQuery(
        ["evolution", params.id],
        () => requestEvolution({ params: { id: params.id } }),
        config
    );
};
