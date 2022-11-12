import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../utils/constants";
import { ThemeSwitcher } from "../../../../themeSwitcher/ThemeSwitcher";
import { Typography } from "../../../../Typography/Typography";

import styles from "./NavList.module.css";

export const NavList = () => {
    return (
        <nav>
            <ul className={styles.nav_ul}>
                <li>
                    <Typography variant="title-regular">
                        <Link to={ROUTES.POKEMONS}>Pokemons</Link>
                    </Typography>
                </li>
                <li>
                    <Typography variant="title-regular">
                        <Link to={ROUTES.USER}>Profile</Link>
                    </Typography>
                </li>
                <li>
                    <Typography variant="title-regular">
                        <Link to={ROUTES.SETTINGS}>Settings</Link>
                    </Typography>
                </li>
                <li>
                    <Typography variant="title-regular">
                        <Link to={ROUTES.USERS}>Users</Link>
                    </Typography>
                </li>
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </nav>
    );
};
