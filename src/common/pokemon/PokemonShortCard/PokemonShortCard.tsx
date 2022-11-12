import { useRequestPokemonQuery } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./PokemonShortCard.module.css";
import { PokemonTypes } from "../PokemonTypes/PokemonTypes";
import { Image } from "../../image/Image";

interface PokemonShortCardProps {
    idOrName: Pokemon["name"] | Pokemon["id"];
    isActive?: boolean;
}
export const PokemonShortCard: React.FC<PokemonShortCardProps> = ({
    idOrName,
    isActive,
}) => {
    const navigate = useNavigate();
    const { data, isLoading } = useRequestPokemonQuery({
        idOrName,
    });

    if (isLoading || !data) return null;

    const pokemon = data.data;

    return (
        <div
            className={classNames(styles.shortCard, {
                [styles.shortCard_active]: isActive,
            })}
            onClick={() => navigate(`/pokemon/${pokemon.id}`)}
            tabIndex={0}
            role="button"
            onKeyPress={(event) => {
                if (event.key === "Enter") {
                    return navigate(`/pokemon/${pokemon.id}`);
                }
            }}
        >
            <Image
                src={String(pokemon.sprites.front_default)}
                alt="pokemon"
                variant="small-pokemon"
                className={styles.shortCard_img}
            />
            <div className={styles.shortCard_info}>
                <p>{pokemon.name}</p>
                <PokemonTypes types={pokemon.types} />
            </div>
        </div>
    );
};
