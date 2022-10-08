import api from "../../../instance";
import { AxiosRequestConfig } from "axios";

interface RequestSpeciesParams {
    config?: AxiosRequestConfig;
    params: { id: number };
}

export const requestPokemonSpecies = ({
    config,
    params,
}: RequestSpeciesParams) =>
    api.get<PokemonSpecies>(`pokemon-species/${params.id}`, config);
