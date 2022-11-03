import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import { BurgerMenu } from "../Header/components";

export const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header__left}>
                <h1 className={styles.header__left_logo}>PokemonBase</h1>
            </div>
            <div className={styles.header__right}>
                <ul className={styles.header__right_links}>
                    <li>
                        <Link to={ROUTES.POKEMONS}>Pokemons</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.POKEDEX}>Pokedex</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.USER}>Profile</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SETTINGS}>Settings</Link>
                    </li>
                </ul>
                <BurgerMenu />
            </div>
        </div>
    );
};
