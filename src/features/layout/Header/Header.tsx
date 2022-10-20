import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";

export const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header__left}>
                <img
                    width={80}
                    src="https://e7.pngegg.com/pngimages/1023/911/png-clipart-pokemon-logo-pokemon-logo.png"
                    alt="logo"
                />
            </div>
            <div className={styles.header__right}>
                <ul>
                    <li>
                        <Link to={ROUTES.POKEMONS}>Pokemons</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.POKEDEX}>Pokedex</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.USER}>Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
