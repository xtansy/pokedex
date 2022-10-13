import React from "react";
import styles from "./PokemonCard.module.css";
import { getPokemonId } from "../../utils/helpers";

interface PokemonCardProps {
    selectedPokemon: Pokemon | undefined;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
    selectedPokemon,
}) => {
    if (!selectedPokemon) return null;
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div>
                    <h2 className={styles.card_header_name}>
                        {selectedPokemon.name}
                    </h2>
                    <ul className={styles.card_header_types}>
                        {selectedPokemon.types.map((item: any, i: any) => {
                            return <li key={i}>{item.type.name}</li>;
                        })}
                    </ul>
                </div>
                <p className={styles.card_header_id}>
                    {getPokemonId(selectedPokemon.id)}
                </p>
            </div>
            <img
                src={String(selectedPokemon.sprites.front_default)}
                alt="pokemon"
            />
            <div className={styles.card_content}>
                <div className={styles.card_content_stats}>
                    <h2>Stats</h2>
                    <ul className={styles.card_content_stats_ul}>
                        {selectedPokemon.stats.map((item: any, i: any) => {
                            return (
                                <li key={i}>
                                    <h3>{item.stat.name}:</h3>
                                    <p>{item.base_stat}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={styles.card_content_abil}>
                    <h2>Abilities</h2>
                    <ul className={styles.card_content_abil_ul}>
                        {selectedPokemon.abilities.map((item: any, i: any) => {
                            return <li key={i}>{item.ability.name}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
