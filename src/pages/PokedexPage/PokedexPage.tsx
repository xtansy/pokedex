import { useState } from "react";
import classnames from "classnames";

import {
    useRequestEvolutionQuery,
    useRequestPokemonQueries,
} from "../../utils/api/";
import styles from "./PokedexPage.module.css";
import { PokemonCard } from "../../common";

export const PokedexPage = () => {
    const [offset, setOffset] = useState(6);

    const [selectedPokemonId, setSelectedPokemonId] = useState(1);

    const results = useRequestPokemonQueries({ params: { offset } });

    const isLoading = results.some((item) => item.isLoading);

    // const { data } = useRequestEvolutionQuery({
    //     params: { id: 1 },
    //     config: { enabled: !isLoading },
    // });
    // console.log(data?.data);

    if (isLoading) return null;

    const pokemons = results.map((item) => item.data!.data);

    const selectedPokemon = pokemons.find(
        (item) => item.id === selectedPokemonId
    );

    return (
        <div className={styles.page_container}>
            <PokemonCard selectedPokemon={selectedPokemon} />

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
                                src={String(item.sprites.front_default)}
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
