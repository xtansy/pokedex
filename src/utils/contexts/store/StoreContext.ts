import { createContext, Dispatch, SetStateAction } from "react";

export type Store = {
    session: {
        isAuth: boolean;
    };
};

export interface StoreContextProps {
    store: Store;
    setStore: Dispatch<SetStateAction<Store>>;
}

export const StoreContext = createContext<StoreContextProps>({
    store: {
        session: {
            isAuth: false,
        },
    },
    setStore: () => {},
});
