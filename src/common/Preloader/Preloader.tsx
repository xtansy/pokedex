import logo from "../../assets/img/logo2.png";
import styles from "./Preloader.module.css";

import { Image, Spinner } from "../";

export const Preloader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.preloader}>
                <Image
                    src={logo}
                    alt="logo"
                    variant="logo"
                    className={styles.img_anim}
                />
                <Spinner />
            </div>
        </div>
    );
};
