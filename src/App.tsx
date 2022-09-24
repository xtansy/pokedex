import { Routes, Route } from "react-router-dom";

import { PokemonsPage, PokedexPage } from "./pages";
import { ROUTES } from "./utils/constants";

const App = () => {
    return (
        <Routes>
            <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
            <Route path={ROUTES.POKEDEX} element={<PokedexPage />} />
        </Routes>
    );
};

export default App;
