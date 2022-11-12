import { useState } from "react";

import { useStore } from "../../../../../utils/contexts";
import { useLogoutMutation } from "../../../../../utils/firebase/hooks";
import { Button, ProfileCard, Typography } from "../../../../";
import { Burger } from "../Burger/Burger";
import { NavList } from "../";

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
    const onClickLogout = () => {
        logout.mutate({});
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
                            <Typography
                                Tagname="h1"
                                variant="title"
                                className={styles.burgerMenu_block_nav_title}
                            >
                                Navigation
                            </Typography>
                            <NavList />
                        </div>
                        <Button onClick={onClickLogout}>LOGOUT</Button>
                    </div>
                </div>
            )}
        </div>
    );
};
