import React from "react";
import styles from "./PokemonStats.module.css";

interface PokemonStatsProps {
    title: string;
    stats: string[];
}

export const PokemonStats: React.FC<PokemonStatsProps> = ({ title, stats }) => {
    return (
        <div className={styles.pokemon_stats}>
            <h2>{title}</h2>
            <ul className={styles.pokemon_stats_ul}>
                {stats.map((item, i) => {
                    return <li key={i}>{item}</li>;
                })}
            </ul>
        </div>
    );
};
