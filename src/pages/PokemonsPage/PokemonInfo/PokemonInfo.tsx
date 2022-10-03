import { useRequestPokemonQuery } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import styles from "./PokemonInfo.module.css";

interface PokemonInfoProps {
    id: number;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ id }) => {
    const navigate = useNavigate();
    const { data, isLoading } = useRequestPokemonQuery({ params: { id } });

    if (isLoading || !data) return null;

    const pokemon = data.data;

    return (
        <div
            role="button"
            tabIndex={0}
            onKeyPress={(event) => {
                if (event.key === "Enter") navigate(`pokemon/${id}`);
            }}
            onClick={() => navigate(`pokemon/${id}`)}
            className={styles.pokemon_info}
        >
            <img src={String(pokemon.sprites.front_default)} alt="pokemon" />
            <ul className={styles.pokemon_types}>
                {pokemon.types.map((item: any, i: any) => {
                    return <li key={i}>{item.type.name}</li>;
                })}
            </ul>
            <div className={styles.pokemon_content}>
                <div className={styles.pokemon_stats}>
                    <h2>Stats</h2>
                    <ul className={styles.pokemon_stats_ul}>
                        {pokemon.stats.map((item: any, i: any) => {
                            return (
                                <li key={i}>
                                    <h3>{item.stat.name}:</h3>
                                    <p>{item.base_stat}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={styles.pokemon_abil}>
                    <h2>Abilities</h2>
                    <ul className={styles.pokemon_abil_ul}>
                        {pokemon.abilities.map((item: any, i: any) => {
                            return <li key={i}>{item.ability.name}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;
