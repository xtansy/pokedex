import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import { BurgerMenu } from "../Header/components";
import { Typography } from "../..";

export const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header__left}>
                <Typography>PokemonBase</Typography>
            </div>
            <div className={styles.header__right}>
                <ul className={styles.header__right_links}>
                    <li>
                        <Typography variant="title-regular">
                            <Link to={ROUTES.POKEMONS}>Pokemons</Link>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="title-regular">
                            <Link to={ROUTES.POKEDEX}>Pokedex</Link>
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
                </ul>
                <BurgerMenu />
            </div>
        </div>
    );
};
