import { useContext } from "react";

import { StoreContext, INITIAL_STORE } from "./StoreContext";

export const useStore = () => {
    const { store, setStore } = useContext(StoreContext);

    console.log(store.user);

    const logoutClearStore = () => {
        setStore(INITIAL_STORE);
    };

    return {
        ...store,
        logoutClearStore,
    };
};
