import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
    useRequestPokemonQuery,
    useRequestSpeciesQuery,
} from ".././../utils/api";
import { PokemonStats, PokemonEvolutionChain } from "../../common";
import { getPokemonId } from "../../utils/helpers";

import styles from "./PokemonPage.module.css";
import { Button } from "../../common/buttons";

export const PokemonPage = () => {
    const navigate = useNavigate();
    const { pokemonid } = useParams();
    const id = +(pokemonid as string);
    const { data: pokemonQueryData, isLoading: pokemonQueryLoading } =
        useRequestPokemonQuery({
            idOrName: id,
        });

    const { data: pokemonSpecies, isLoading: pokemonSpeciesLoading } =
        useRequestSpeciesQuery(
            { id },
            {
                options: {
                    enabled: !pokemonQueryLoading,
                },
            }
        );

    if (!pokemonQueryData || pokemonSpeciesLoading || !pokemonSpecies)
        return null;

    const chainID = pokemonSpecies.data.evolution_chain.url
        .replace("https://pokeapi.co/api/v2/evolution-chain/", "")
        .replace("/", "");

    const pokemonData = pokemonQueryData.data;

    return (
        <div className={styles.page}>
            <div className={styles.page_header}>
                <p>{getPokemonId(pokemonData.id)}</p>
                <h1>{pokemonData.name}</h1>
            </div>
            <div className={styles.page_img}>
                <img
                    src={String(pokemonData.sprites.front_default)}
                    alt="pokemon"
                />
            </div>
            <PokemonStats
                title="Stats"
                stats={pokemonData.stats.map(
                    (item) => `${item.stat.name}: ${item.base_stat}`
                )}
            />
            <PokemonStats
                title="Abilities"
                stats={pokemonData.abilities.map(({ ability }) => ability.name)}
            />
            <PokemonEvolutionChain
                chainID={+chainID}
                pokemonName={pokemonData.name}
            />

            <div className={styles.page_buttons}>
                <Button
                    onClick={() => {
                        navigate(`/pokemon/${id + 1}`);
                    }}
                >
                    Вперёд
                </Button>
                {id > 1 && (
                    <Button
                        onClick={() => {
                            navigate(`/pokemon/${id - 1}`);
                        }}
                    >
                        Назад
                    </Button>
                )}
            </div>
        </div>
    );
};
