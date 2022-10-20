import { Routes, Route, Navigate } from "react-router-dom";

import {
    PokemonsPage,
    PokedexPage,
    PokemonPage,
    Auth,
    ProfilePage,
} from "./pages";
import Layout from "./features/layout/Layout";
import { ROUTES } from "./utils/constants";
import { useStore } from "./utils/contexts";

export const AuthApp = () => {
    return (
        <Routes>
            <Route path={ROUTES.AUTH} element={<Auth />} />
            {/* <Route path="*" element={<Navigate to={ROUTES.AUTH} />} /> */}
        </Routes>
    );
};

const App = () => {
    const {
        session: { isAuth },
    } = useStore();

    return (
        <>
            {!isAuth && <AuthApp />}
            {isAuth && (
                <Routes>
                    <Route element={<Layout />}>
                        <Route
                            path={ROUTES.POKEMONS}
                            element={<PokemonsPage />}
                        />
                        <Route
                            path={ROUTES.POKEDEX}
                            element={<PokedexPage />}
                        />
                        <Route
                            path={ROUTES.POKEMON}
                            element={<PokemonPage />}
                        />
                        <Route path={ROUTES.USER} element={<ProfilePage />} />
                        <Route path={ROUTES.AUTH} element={<Auth />} />
                    </Route>
                </Routes>
            )}
        </>
    );
};

export default App;
