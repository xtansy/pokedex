import api from "../../../instance";
import { AxiosRequestConfig } from "axios";

interface RequestEvolutionParams {
    config?: AxiosRequestConfig;
    params: { id: number };
}

export const requestEvolution = ({ config, params }: RequestEvolutionParams) =>
    api.get<EvolutionChain>(`evolution-chain/${params.id}`, { ...config });
