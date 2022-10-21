import { useNavigate } from "react-router-dom";

import { Button } from "../../common";
import {
    useLogoutMutation,
    useUserPokemonsCollection,
} from "../../utils/firebase/hooks";
import { ROUTES } from "../../utils/constants";
import { useStore } from "../../utils/contexts";
import { PokemonEvolutionChainItem } from "../../common/pokemon/PokemonEvolutionChain/PokemonEvolutionChainItem/PokemonEvolutionChainItem";

export const ProfilePage = () => {
    const { user } = useStore();
    const navigate = useNavigate();
    const logout = useLogoutMutation();

    const { data } = useUserPokemonsCollection({ uid: user.uid });

    const { logoutClearStore } = useStore();
    const onClickLogout = () => {
        logout.mutate({});
        navigate(ROUTES.AUTH);
        logoutClearStore();
    };

    return (
        <>
            <div>
                <p>{user.uid}</p>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                {user.photoURL && <img src={user.photoURL} alt="userPhoto" />}
                <Button onClick={onClickLogout}>Выйти</Button>
            </div>
            <div>
                <h2>Team</h2>
                {data &&
                    data.map((pokemon: any) => {
                        return (
                            <PokemonEvolutionChainItem
                                idOrName={pokemon.pokemonId}
                            />
                        );
                    })}
            </div>
        </>
    );
};
