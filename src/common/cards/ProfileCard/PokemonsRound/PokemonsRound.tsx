import styles from "./PokemonsRound.module.css";

import { Image } from "../../..";

interface PokemonsRoundProps {
    pokemons: User["pokemons"];
    onClickPokemon: (id: Pokemon["id"]) => void;
}

export const PokemonsRound: React.FC<PokemonsRoundProps> = ({
    pokemons,
    onClickPokemon,
}) => {
    if (!pokemons.length) {
        return null;
    }
    return (
        <div className={styles.user_pokemons}>
            {pokemons.map((pokemon, i) => {
                return (
                    <div
                        onClick={() => onClickPokemon(pokemon.id)}
                        key={i}
                        className={styles.user_pokemons_item}
                    >
                        <Image src={pokemon.image} variant="small-pokemon" />
                    </div>
                );
            })}
        </div>
    );
};
