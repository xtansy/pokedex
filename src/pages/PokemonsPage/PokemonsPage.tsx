import React from "react";
import Pokemon from "./Pokemon/Pokemon";

const PokemonsPage = () => {
    return (
        <div className="container">
            <div className="flex justify-center">
                {Array.from({ length: 20 }).map((item, i) => {
                    return <Pokemon id={i} />;
                })}
            </div>
        </div>
    );
};

export default PokemonsPage;
