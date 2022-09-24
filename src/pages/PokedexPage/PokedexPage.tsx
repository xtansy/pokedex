import { useState } from "react";
import classnames from "classnames";

import {
    useRequestPokemonQueries,
    useRequestStatQuery,
    useRequestEvolutionQuery,
} from "../../utils/api/";
import styles from "./PokedexPage.module.css";

export const PokedexPage = () => {
    const [offset, setOffset] = useState(6);

    const [selectedPokemonId, setSelectedPokemonId] = useState(1);

    const results = useRequestPokemonQueries(offset);

    const isLoading = results.some((item) => item.isLoading);

    const { data } = useRequestEvolutionQuery({
        id: 1,
        config: { enabled: !isLoading },
    });
    console.log(data?.data);

    if (isLoading) return null;

    const pokemons = results.map((item) => item.data?.data);

    const selectedPokemon = pokemons.find(
        (item) => item.id === selectedPokemonId
    );

    return (
        <div className={styles.page_container}>
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
                        #{selectedPokemon.id}
                    </p>
                </div>
                <img
                    src={selectedPokemon.sprites.front_default}
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
                            {selectedPokemon.abilities.map(
                                (item: any, i: any) => {
                                    return <li key={i}>{item.ability.name}</li>;
                                }
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <ul className={styles.list_container}>
                {pokemons.map((item) => {
                    const isActive = selectedPokemonId === item.id;
                    return (
                        <li
                            // acesobility
                            role="option"
                            aria-selected={isActive}
                            tabIndex={0}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    setSelectedPokemonId(item.id);
                                }
                            }}
                            //
                            onClick={() => setSelectedPokemonId(item.id)}
                            className={classnames(styles.list_item, {
                                [styles.list_item_active]: isActive,
                            })}
                            key={item.id}
                        >
                            <img
                                className={styles.list_item_image}
                                src={item.sprites.front_default}
                                alt="pokemon"
                            />
                            <h2 className={styles.list_item_text}>
                                {item.name}
                            </h2>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
