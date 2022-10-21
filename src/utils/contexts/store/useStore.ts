import { useContext } from "react";

import { StoreContext, Store, INITIAL_STORE } from "./StoreContext";

export const useStore = () => {
    const { store, setStore } = useContext(StoreContext);

    const changeSession = (newSession: Partial<Store["session"]>) => {
        setStore({
            ...store,
            session: { ...store.session, ...newSession },
        });
    };

    const logoutClearStore = () => {
        setStore(INITIAL_STORE);
    };

    return {
        ...store,
        changeSession,
        logoutClearStore,
    };
};
