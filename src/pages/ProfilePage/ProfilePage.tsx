import styles from "./ProfilePage.module.css";

import { useLogoutMutation } from "../../utils/firebase/hooks";
import { useStore } from "../../utils/contexts";
import { PokemonShortCard, ProfileCard, Button } from "../../common";

export const ProfilePage = () => {
    const { user, logoutClearStore } = useStore();

    const pokemons = user.pokemons;

    const logout = useLogoutMutation();

    const onClickLogout = () => {
        logout.mutate({});
        logoutClearStore();
    };

    return (
        <div className={styles.profile}>
            <div className={styles.profile__header}>
                <ProfileCard user={user} />
                <Button onClick={onClickLogout}>LOGOUT</Button>
            </div>
            <div className={styles.profile__content}>
                <h2>Team</h2>
                <div className={styles.profile__content_items}>
                    {pokemons.map((pokemon, i) => {
                        return (
                            <div
                                key={i}
                                className={styles.profile__content_items_item}
                            >
                                <PokemonShortCard idOrName={pokemon.id} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
