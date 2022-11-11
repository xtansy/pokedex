import { useState } from "react";
import { useTheme } from "../../utils/contexts";

import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
    const { setTheme } = useTheme();

    const [lightMode, setLightMode] = useState<boolean>(false);

    const onChangeTheme = () => {
        setLightMode(!lightMode);
        setTheme(lightMode ? "dark" : "light");
    };

    return (
        <label className={styles.switch}>
            <input
                className={styles.input}
                onChange={onChangeTheme}
                type="checkbox"
                checked={lightMode}
            />
            <span className={styles.slider + " " + styles.round}></span>
        </label>
    );
};
