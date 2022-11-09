import styles from "./Header.module.css";
import { BurgerMenu, DesktopMenu } from "../Header/components";

export const Header = () => {
    return (
        <div className={styles.header_container}>
            <DesktopMenu />
            <BurgerMenu />
        </div>
    );
};
