import { useQuery } from "@tanstack/react-query";

import { requestStat } from "../../../requests/stat/id";

export const useRequestStatQuery = (id: number) => {
    return useQuery(["stat", id], () => requestStat({ params: { id } }));
};
