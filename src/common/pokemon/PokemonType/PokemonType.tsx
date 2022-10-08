import classnames from "classnames";
import styles from "./PokemonType.module.css";

interface PokemonTypeProps {
    type: PokemonType["type"];
}
export const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
    return (
        <div className={classnames(styles[type.name], styles.pokemon_type)}>
            {type.name}
        </div>
    );
};
