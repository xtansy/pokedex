import { useQuery } from "@tanstack/react-query";

import { requestStat } from "../../../requests/stat/id";

interface UseRequestStatQueryParams {
    id: number;
}

export const useRequestStatQuery = ({
    params,
    config,
}: RequestQueryParams<UseRequestStatQueryParams>) => {
    return useQuery(
        ["stat", params.id],
        () => requestStat({ params: { id: params.id } }),
        config
    );
};
