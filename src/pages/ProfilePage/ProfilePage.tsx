import styles from "./ProfilePage.module.css";

import { Button } from "../../common";
import {
    useLogoutMutation,
    useUserPokemonsCollection,
} from "../../utils/firebase/hooks";
import { useStore } from "../../utils/contexts";
import { ProfileCard } from "../../common";
import { PokemonShortCard } from "../../common";

export const ProfilePage = () => {
    const { user, logoutClearStore } = useStore();
    const logout = useLogoutMutation();

    const { data } = useUserPokemonsCollection({ uid: user.uid });

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
                    {data &&
                        data.map((pokemon, i) => {
                            return (
                                <div
                                    key={i}
                                    className={
                                        styles.profile__content_items_item
                                    }
                                >
                                    <PokemonShortCard
                                        idOrName={pokemon.pokemonId}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
