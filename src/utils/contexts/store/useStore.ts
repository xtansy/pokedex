import { useContext } from "react";

import { StoreContext } from "./StoreContext";

export const useStore = () => {
    const { store, setStore } = useContext(StoreContext);

    return {
        ...store,
        setStore,
    };
};
