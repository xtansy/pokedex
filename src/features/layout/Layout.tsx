import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Layout: React.FC = () => {
    return (
        <>
            <div className={styles.header_container}>
                <div className={styles.header__left}>
                    <img
                        width={80}
                        src="https://e7.pngegg.com/pngimages/1023/911/png-clipart-pokemon-logo-pokemon-logo.png"
                        alt="logo"
                    />
                    <h2>Lorem ipsum dolor</h2>
                </div>
                <div className={styles.header__right}>
                    <ul>
                        <li>
                            <Link to={ROUTES.POKEMONS}>Pokemons</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.POKEDEX}>Pokedex</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Layout;
