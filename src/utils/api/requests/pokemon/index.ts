import api from "../../instance";
import { AxiosRequestConfig } from "axios";

interface RequestPokemonParams {
    config?: AxiosRequestConfig;
}

export const requestPokemon = ({ config }: RequestPokemonParams) =>
    api.get("pokemon/?limit=20&offset=0", config);
