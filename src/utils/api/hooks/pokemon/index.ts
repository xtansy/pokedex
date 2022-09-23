import { useQuery } from "@tanstack/react-query";
import { requestPokemon } from "../../requests/pokemon/id";

export const useRequestPokemonQuery = (id: number) => {
    return useQuery(["pokemon"], () =>
        requestPokemon({
            params: {
                id,
            },
        })
    );
};
