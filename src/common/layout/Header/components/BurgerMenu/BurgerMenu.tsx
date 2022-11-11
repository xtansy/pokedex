import { useState } from "react";
import { Link } from "react-router-dom";

import { ProfileCard } from "../../../../../common/";
import { ROUTES } from "../../../../../utils/constants";
import { useStore } from "../../../../../utils/contexts";
import { useLogoutMutation } from "../../../../../utils/firebase/hooks";
import { Button } from "../../../../";
import { Burger } from "../Burger/Burger";
import { Typography } from "../../../../../common/";

import styles from "./BurgerMenu.module.css";

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(true);

    const { user, logoutClearStore } = useStore();

    const logout = useLogoutMutation();

    const onToggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const onClose = () => {
        setIsOpen(false);
    };
    const onClickLogout = () => {
        logout.mutate({});
        logoutClearStore();
    };

    return (
        <div className={styles.burger_wrapper}>
            <Burger onClick={onToggleOpen} isActive={isOpen} />
            {isOpen && (
                <div className={styles.burgerMenu}>
                    <div className={styles.burgerMenu_block}>
                        <div className={styles.burgerMenu_block_profile}>
                            <ProfileCard
                                user={user}
                                onCloseBurgerMenu={onClose}
                            />
                        </div>
                        <div className={styles.burgerMenu_block_nav}>
                            <h2 className="title">Navigation</h2>
                            <ul>
                                <li onClick={onClose}>
                                    <Typography variant="title-regular">
                                        <Link to={ROUTES.POKEMONS}>
                                            Pokemons
                                        </Link>
                                    </Typography>
                                </li>
                                <li onClick={onClose}>
                                    <Typography variant="title-regular">
                                        <Link to={ROUTES.POKEDEX}>Pokedex</Link>
                                    </Typography>
                                </li>
                                <li onClick={onClose}>
                                    <Typography variant="title-regular">
                                        <Link to={ROUTES.USER}>Profile</Link>
                                    </Typography>
                                </li>
                                <li onClick={onClose}>
                                    <Typography variant="title-regular">
                                        <Link to={ROUTES.SETTINGS}>
                                            Settings
                                        </Link>
                                    </Typography>
                                </li>
                                <li onClick={onClose}>
                                    <Typography variant="title-regular">
                                        <Link to={ROUTES.USERS}>Users</Link>
                                    </Typography>
                                </li>
                            </ul>
                        </div>
                        <Button onClick={onClickLogout}>LOGOUT</Button>
                    </div>
                </div>
            )}
        </div>
    );
};
