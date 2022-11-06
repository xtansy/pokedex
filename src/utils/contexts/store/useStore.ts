import { useContext } from "react";

import { StoreContext, INITIAL_STORE } from "./StoreContext";

export const useStore = () => {
    const { store, setStore } = useContext(StoreContext);

    const logoutClearStore = () => {
        setStore(INITIAL_STORE);
    };

    return {
        ...store,
        logoutClearStore,
    };
};
