import { Routes, Route } from "react-router-dom";

import PokemonsPage from "./pages/PokemonsPage/PokemonsPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PokemonsPage />} />
        </Routes>
    );
};

export default App;
