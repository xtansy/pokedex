import { useContext } from "react";

import { StoreContext, Store } from "./StoreContext";

export const useStore = () => {
    const { store, setStore } = useContext(StoreContext);

    const changeSession = (newSession: Partial<Store["session"]>) => {
        setStore({
            ...store,
            session: { ...store.session, ...newSession },
        });
    };

    return {
        ...store,
        changeSession,
    };
};
