import { User } from "firebase/auth";
import { collection, query, where, Query } from "firebase/firestore";

import { useCollection } from "../hooks";
import { database } from "../instance";

interface useUserPokemonsCollectionProps {
    uid: User["uid"];
}

export const useUserPokemonsCollection = ({
    uid,
}: useUserPokemonsCollectionProps) => {
    const q = query(
        collection(database, "pokemons"),
        where("uid", "==", uid)
    ) as Query<PokemonDocument>;
    return useCollection<PokemonDocument>(q);
};
