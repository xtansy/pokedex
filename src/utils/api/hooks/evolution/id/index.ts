import { useQuery } from "@tanstack/react-query";
import { requestEvolution } from "../../../requests";

interface RequestEvolutionParams {
    id: number;
    config?: any;
}

export const useRequestEvolutionQuery = ({
    id,
    config,
}: RequestEvolutionParams) => {
    return useQuery(
        ["evolution", id],
        () => requestEvolution({ params: { id } }),
        config
    );
};
