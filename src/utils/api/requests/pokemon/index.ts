import api from "../../instance";
import { AxiosRequestConfig } from "axios";

interface RequestPokemonsParams {
    config?: AxiosRequestConfig;
    params: { offset: number; limit: number };
}

export const requestPokemons = ({ config, params }: RequestPokemonsParams) =>
    api.get<NamedAPIResourceList>(`pokemon/`, { params, ...config });
