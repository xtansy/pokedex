import { useMemo, useState, useEffect } from "react";

import { ThemeContext } from "./";

interface StoreProviderProps {
    children?: React.ReactNode;
}

export const ThemeProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === "dark" ? "light" : "dark");
        root.classList.add(theme);
    }, [theme]);

    const value = useMemo(() => {
        return { theme, setTheme };
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
