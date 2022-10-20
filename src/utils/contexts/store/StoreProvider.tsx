import { useMemo, useState, useEffect } from "react";

import { useAuthState } from "../../firebase/hooks";
import { StoreContext, Store } from "./";

interface StoreProviderProps {
    children?: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const { user } = useAuthState();
    const [store, setStore] = useState<Store>({
        session: {
            isAuth: false,
        },
        user: null,
    });

    useEffect(() => {
        if (user) {
            setStore((oldstate) => {
                return {
                    ...oldstate,
                    session: { ...oldstate.session, isAuth: true },
                    user,
                };
            });
        }
    }, [user]);

    const value = useMemo(() => {
        return { store, setStore };
    }, [store]);

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};
