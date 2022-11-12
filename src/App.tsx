import { Routes, Route, Navigate } from "react-router-dom";

import {
    PokemonsPage,
    PokedexPage,
    PokemonPage,
    Auth,
    ProfilePage,
    SettingsPage,
    UsersPage,
} from "./pages";
import { Preloader, Layout } from "./common";
import { ROUTES } from "./utils/constants";
import { useStore } from "./utils/contexts";
import logo from "./assets/img/logo2.png";
import { useAuthState } from "./utils/firebase/hooks";

export const AuthApp = () => {
    return (
        <Routes>
            <Route path={ROUTES.AUTH} element={<Auth />} />
            <Route path="*" element={<Navigate to={ROUTES.AUTH} />} />
        </Routes>
    );
};

const App = () => {
    const { isLoading } = useAuthState();
    const {
        session: { isAuth },
    } = useStore();

    if (isLoading) return <Preloader />;

    return (
        <>
            {!isAuth && <AuthApp />}
            {isAuth && (
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="*" element={<PokemonsPage />} />
                        {/* <Route
                            path={ROUTES.POKEDEX}
                            element={<PokedexPage />}
                        /> */}
                        <Route
                            path={ROUTES.POKEMON}
                            element={<PokemonPage />}
                        />
                        <Route path={ROUTES.USER} element={<ProfilePage />} />
                        <Route
                            path={ROUTES.SETTINGS}
                            element={<SettingsPage />}
                        />
                        <Route path={ROUTES.USERS} element={<UsersPage />} />
                    </Route>
                </Routes>
            )}
        </>
    );
};

export default App;
