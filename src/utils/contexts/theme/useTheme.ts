import { useContext } from "react";

import { ThemeContext } from "./";

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return {
        theme,
        setTheme,
    };
};
