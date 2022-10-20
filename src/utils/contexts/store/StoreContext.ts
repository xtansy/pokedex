import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "firebase/auth";

export type Store = {
    session: {
        isAuth: boolean;
    };
    user: User | null;
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
        user: null,
    },
    setStore: () => {},
});
