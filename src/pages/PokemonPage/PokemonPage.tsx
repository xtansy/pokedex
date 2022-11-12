import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
    useRequestPokemonQuery,
    useRequestSpeciesQuery,
} from ".././../utils/api";
import {
    PokemonStats,
    PokemonEvolutionChain,
    Typography,
    Image,
} from "../../common";
import { getPokemonId } from "../../utils/helpers";
import { LoadingPage } from "../";

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
        return <LoadingPage />;

    const chainID = pokemonSpecies.data.evolution_chain.url
        .replace("https://pokeapi.co/api/v2/evolution-chain/", "")
        .replace("/", "");

    const pokemonData = pokemonQueryData.data;

    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.page_wrapper}>
                    <div className={styles.page_pokemon}>
                        <div className={styles.page_header}>
                            <Typography Tagname="p" variant="title-body">
                                {getPokemonId(pokemonData.id)}
                            </Typography>
                            <Typography variant="sub-title">
                                {pokemonData.name}
                            </Typography>
                        </div>
                        <div className={styles.page_img}>
                            <Image
                                variant="pokemon"
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
                            stats={pokemonData.abilities.map(
                                ({ ability }) => ability.name
                            )}
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
                </div>
            </div>
        </div>
    );
};
