import { useNavigate } from "react-router-dom";

import { useRequestPokemonQuery } from "../../utils/api";
import { getPokemonId } from "../../utils/helpers";
import { PokemonStats, PokemonTypes } from "../";
import { Button } from "../buttons";
import { useUpdateUser } from "../../utils/firebase/hooks";
import { useStore } from "../../utils/contexts";

import styles from "./PokemonInfo.module.css";
interface PokemonInfoProps {
    id: number;
    onClose: () => void;
}

const MAX_POKEMON_TEAM_COUNT = 6;

export const PokemonInfo: React.FC<PokemonInfoProps> = ({ id, onClose }) => {
    const { session, user } = useStore();

    const navigate = useNavigate();

    const { data, isLoading } = useRequestPokemonQuery({ idOrName: id });

    const { mutate, isLoading: addPokemonLoading } = useUpdateUser({
        options: {
            onSuccess: () => onClose(),
        },
    });

    if (isLoading || !data) return null;

    const pokemon = data.data;

    const isShowAddPokemonButton =
        session.isAuth &&
        user.pokemons.length < MAX_POKEMON_TEAM_COUNT &&
        !user.pokemons.some((item) => item.id === pokemon.id);

    const onClickAddToTeam = () => {
        mutate({
            collection: "users",
            id: user.uid,
            data: {
                pokemons: [
                    ...user.pokemons,
                    {
                        name: pokemon.name,
                        id: pokemon.id,
                        image: pokemon.sprites.front_default,
                    },
                ],
            },
        });
    };
    return (
        <div className={styles.pokemon_info}>
            <div className={styles.pokemon_info_header}>
                <div className={styles.pokemon_info_header_title}>
                    <h2>{pokemon.name}</h2>
                    <p>{getPokemonId(id)}</p>
                </div>
                <div className={styles.close} onClick={onClose}>
                    X
                </div>
            </div>
            <div>
                <img
                    className={styles.pokemon_img}
                    src={String(pokemon.sprites.front_default)}
                    alt="pokemon"
                />
            </div>
            <PokemonTypes types={pokemon.types} />
            <div className={styles.pokemon_content}>
                <PokemonStats
                    title="Stats"
                    stats={pokemon.stats.map(
                        (item) => `${item.stat.name}: ${item.base_stat}`
                    )}
                />
                <PokemonStats
                    title="Abilities"
                    stats={pokemon.abilities.map(({ ability }) => ability.name)}
                />

                <Button
                    onClick={() => navigate(`/pokemon/${id}`)}
                    // tabIndex={0}
                    // onKeyPress={(event) => {
                    //     if (event.key === "Enter") navigate(`pokemon/${id}`);
                    // }}
                    // onClick={() => navigate(`/pokemon/${id}`)}
                >
                    OPEN
                </Button>
                {isShowAddPokemonButton && (
                    <Button
                        disabled={addPokemonLoading}
                        loading={addPokemonLoading}
                        onClick={onClickAddToTeam}
                    >
                        ADD TO TEAM
                    </Button>
                )}
            </div>
        </div>
    );
};
