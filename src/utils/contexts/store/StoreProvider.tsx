import { useMemo, useState, useEffect } from "react";

import { useAuthState } from "../../firebase/hooks";
import { StoreContext, Store, INITIAL_STORE } from "./";

interface StoreProviderProps {
    children?: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const { user } = useAuthState();
    const [store, setStore] = useState<Store>(INITIAL_STORE);

    useEffect(() => {
        if (user?.uid) {
            setStore({
                ...store,
                session: { isAuth: true },
                user,
            });
        } else {
            setStore(INITIAL_STORE);
        }
    }, [user]);

    const value = useMemo(() => {
        return { store, setStore };
    }, [store]);

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};
