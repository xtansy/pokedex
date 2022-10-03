import { useRequestPokemonQuery } from ".././../utils/api/hooks/pokemon/id";
import { useParams } from "react-router-dom";

export const PokemonPage = () => {
    const params = useParams();

    const { data } = useRequestPokemonQuery({
        params: { id: +(params.pokemonid as string) },
        config: {
            onSuccess: (data: any) => {
                console.log(data);
            },
        },
    });

    return <div>{data?.data.name}</div>;
};
