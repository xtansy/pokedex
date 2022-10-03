import { Routes, Route } from "react-router-dom";
import Layout from "./features/layout/Layout";
import { PokemonsPage, PokedexPage, PokemonPage } from "./pages";
import { ROUTES } from "./utils/constants";

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
                <Route path={ROUTES.POKEDEX} element={<PokedexPage />} />

                <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
            </Route>
        </Routes>
    );
};

export default App;
