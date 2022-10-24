import { useState } from "react";
import { Link } from "react-router-dom";

import { ProfileCard } from "../../common";
import { ROUTES } from "../../utils/constants";
import { useStore } from "../../utils/contexts";
import { useLogoutMutation } from "../../utils/firebase/hooks";
import { Button } from "../../common";

import styles from "./BurgerMenu.module.css";

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(true);

    const { user } = useStore();

    const logout = useLogoutMutation();

    const onToggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    if (isOpen)
        return (
            <div className={styles.burgerMenu}>
                <div
                    className={styles.burger_lines_active}
                    onClick={onToggleOpen}
                >
                    <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                </div>
                <div className={styles.burgerMenu_block}>
                    <div className={styles.burgerMenu_block_profile}>
                        <ProfileCard user={user} />
                    </div>
                    <div className={styles.burgerMenu_block_nav}>
                        <h2 className="title">Navigation</h2>
                        <ul>
                            <li onClick={onClose}>
                                <Link to={ROUTES.POKEMONS}>Pokemons</Link>
                            </li>
                            <li onClick={onClose}>
                                <Link to={ROUTES.POKEDEX}>Pokedex</Link>
                            </li>
                            <li onClick={onClose}>
                                <Link to={ROUTES.USER}>Profile</Link>
                            </li>
                        </ul>
                    </div>
                    <Button onClick={() => logout.mutate({})}>LOGOUT</Button>
                </div>
            </div>
        );
    return (
        <div className={styles.burger_lines} onClick={onToggleOpen}>
            <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        </div>
    );
};
