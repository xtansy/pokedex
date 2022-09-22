import { useQuery } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import api from "./utils/api/instance";

import PokemonsPage from "./pages/PokemonsPage/PokemonsPage";
function App() {
    const { data } = useQuery<any>(["pokemon"], () =>
        api.get("pokemon/?limit=20&offset=0")
    );

    console.log(data);

    return (
        <Routes>
            <Route path="/" element={<PokemonsPage />} />
        </Routes>
    );
}

export default App;
