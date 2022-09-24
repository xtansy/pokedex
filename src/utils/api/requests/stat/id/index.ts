import api from "../../../instance";
import { AxiosRequestConfig } from "axios";

interface RequestPokemonParams {
    config?: AxiosRequestConfig;
    params: { id: number };
}

export const requestStat = ({ config, params }: RequestPokemonParams) =>
    api.get<PokemonStat>(`stat/${params.id}`, { ...config });
