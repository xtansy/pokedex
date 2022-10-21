import { useRequestPokemonQuery } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { getPokemonId } from "../../utils/helpers";
import { PokemonStats, PokemonTypes } from "../";
import { Button } from "../buttons";
import styles from "./PokemonInfo.module.css";
import { useAddDocumentMutation } from "../../utils/firebase/hooks";
import { useStore } from "../../utils/contexts";

interface PokemonInfoProps {
    id: number;
    onClose: () => void;
}

export const PokemonInfo: React.FC<PokemonInfoProps> = ({ id, onClose }) => {
    const { session, user } = useStore();

    const navigate = useNavigate();

    const { data, isLoading } = useRequestPokemonQuery({ idOrName: id });

    const { mutate } = useAddDocumentMutation();

    if (isLoading || !data) return null;

    const pokemon = data.data;

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
                {session.isAuth && user && (
                    <Button
                        onClick={() => {
                            mutate({
                                collection: "pokemons",
                                data: { pokemonId: pokemon.id, uid: user.uid },
                            });
                        }}
                    >
                        ADD TO TEAM
                    </Button>
                )}
            </div>
        </div>
    );
};
