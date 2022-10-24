import { useNavigate } from "react-router-dom";

import { Button } from "../../common";
import styles from "./ProfilePage.module.css";
import {
    useLogoutMutation,
    useUserPokemonsCollection,
} from "../../utils/firebase/hooks";
import { ROUTES } from "../../utils/constants";
import { useStore } from "../../utils/contexts";
import { ProfileCard } from "../../common";
import { PokemonShortCard } from "../../common";

export const ProfilePage = () => {
    const { user } = useStore();
    const navigate = useNavigate();
    const logout = useLogoutMutation();

    const { data } = useUserPokemonsCollection({ uid: user.uid });

    const { logoutClearStore } = useStore();
    const onClickLogout = () => {
        logout.mutate({});
        navigate(ROUTES.AUTH);
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
