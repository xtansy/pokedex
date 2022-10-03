import api from "../../../instance";
import { AxiosRequestConfig } from "axios";

interface RequestPokemonParams {
    config?: AxiosRequestConfig;
    params: { id: number };
}

export const requestPokemon = ({ config, params }: RequestPokemonParams) =>
    api.get<Pokemon>(`pokemon/${params.id}`, { ...config });
