import { createContext, Dispatch, SetStateAction } from "react";

export interface ThemeContextProps {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "dark",
    setTheme: () => {},
});
