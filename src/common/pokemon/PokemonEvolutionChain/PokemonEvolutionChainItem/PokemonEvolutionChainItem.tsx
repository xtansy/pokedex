import { useRequestPokemonQuery } from "../../../../utils/api";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./PokemonEvolutionChainItem.module.css";

interface PokemonEvolutionChainItemProps {
    pokemonName: Pokemon["name"];
    isActive: boolean;
}
export const PokemonEvolutionChainItem: React.FC<
    PokemonEvolutionChainItemProps
> = ({ pokemonName, isActive }) => {
    const navigate = useNavigate();
    const { data, isLoading } = useRequestPokemonQuery({
        idOrName: pokemonName,
    });

    if (isLoading || !data) return null;

    const evolutionData = data.data;

    return (
        <div
            className={classNames(styles.evolution_item, {
                [styles.evolution_item_active]: isActive,
            })}
            onClick={() => navigate(`/pokemon/${evolutionData.id}`)}
            tabIndex={0}
            role="button"
            onKeyPress={(event) => {
                if (event.key === "Enter") {
                    return navigate(`/pokemon/${evolutionData.id}`);
                }
            }}
        >
            <img
                src={String(evolutionData.sprites.front_default)}
                alt="pokemon"
            />
            <p>{evolutionData.name}</p>
        </div>
    );
};
