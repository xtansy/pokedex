import { useNavigate } from "react-router-dom";

import { Button, ModalProps, PokemonTypes } from "../../../";
import { useRequestPokemonQuery } from "../../../../utils/api";
import { useUpdateUser } from "../../../../utils/firebase/hooks";
import { useStore } from "../../../../utils/contexts";
import { Image } from "../../../";
import { LoadingContentModal } from "../../LoadingContentModal/LoadingContentModal";

import styles from "./PokemonContentModal.module.css";

interface PokemonContentModalProps extends Pick<ModalProps, "onClose"> {
    id: Pokemon["id"];
}
const MAX_POKEMON_TEAM_COUNT = 6;

export const PokemonContentModal: React.FC<PokemonContentModalProps> = ({
    id,
    onClose,
}) => {
    const { session, user } = useStore();

    const { mutate, isLoading: addPokemonLoading } = useUpdateUser({
        options: {
            onSuccess: () => onClose(),
        },
    });

    const { data, isLoading } = useRequestPokemonQuery({ idOrName: id });

    const navigate = useNavigate();

    if (isLoading || !data) return <LoadingContentModal />;

    const pokemon = data.data;

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
    const isShowAddPokemonButton =
        session.isAuth &&
        user.pokemons.length < MAX_POKEMON_TEAM_COUNT &&
        !user.pokemons.some((item) => item.id === pokemon.id);

    return (
        <div className={styles.pokemonModalContent}>
            <h2>{pokemon.name}</h2>
            <div className={styles.pokemonModalContent_img}>
                <Image
                    variant="pokemon"
                    src={String(pokemon.sprites.front_default)}
                    alt="pokemon"
                />
            </div>
            <PokemonTypes types={pokemon.types} />
            <div className={styles.pokemonModalContent_buttons}>
                {isShowAddPokemonButton && (
                    <Button
                        disabled={addPokemonLoading}
                        loading={addPokemonLoading}
                        onClick={onClickAddToTeam}
                    >
                        ADD TO TEAM
                    </Button>
                )}
                <Button onClick={() => navigate(`/pokemon/${id}`)}>OPEN</Button>
                <Button variant="outlined" onClick={onClose}>
                    CLOSE
                </Button>
            </div>
        </div>
    );
};
