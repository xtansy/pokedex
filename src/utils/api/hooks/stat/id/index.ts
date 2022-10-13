import { useQuery } from "@tanstack/react-query";

import { requestStat } from "../../../requests/stat/id";

interface UseRequestStatQueryParams {
    id: number;
}

export const useRequestStatQuery = ({ id }: UseRequestStatQueryParams) => {
    return useQuery(["stat", id], () => requestStat({ params: { id } }));
};
