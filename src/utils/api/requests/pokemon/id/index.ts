import api from "../../../instance";
import { AxiosRequestConfig } from "axios";

interface RequestPokemonParams {
    config?: AxiosRequestConfig;
    params: { idOrName: number | Pokemon["name"] };
}

export const requestPokemon = ({ config, params }: RequestPokemonParams) =>
    api.get<Pokemon>(`pokemon/${params.idOrName}`, { ...config });
