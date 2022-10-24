import { createContext, Dispatch, SetStateAction } from "react";

export type Store = {
    session: {
        isAuth: boolean;
    };
    user: User;
};

export interface StoreContextProps {
    store: Store;
    setStore: Dispatch<SetStateAction<Store>>;
}

export const INITIAL_STORE = {
    session: {
        isAuth: false,
    },
    user: {} as User,
};

export const StoreContext = createContext<StoreContextProps>({
    store: INITIAL_STORE,
    setStore: () => {},
});
