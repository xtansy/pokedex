import { useMemo, useState } from "react";

import { StoreContext, Store } from "./";

interface StoreProviderProps {
    children?: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const [store, setStore] = useState<Store>({
        session: {
            isAuth: false,
        },
    });

    const value = useMemo(() => {
        return { store, setStore };
    }, [store]);

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};
