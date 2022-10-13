import { Routes, Route } from "react-router-dom";
import Layout from "./features/layout/Layout";
import { PokemonsPage, PokedexPage, PokemonPage, Auth } from "./pages";
import { ROUTES } from "./utils/constants";

const App = () => {
    return (
        <Routes>
            <Route path={ROUTES.AUTH} element={<Auth />} />
            <Route element={<Layout />}>
                <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
                <Route path={ROUTES.POKEDEX} element={<PokedexPage />} />
                <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
            </Route>
        </Routes>
    );
};

export default App;
