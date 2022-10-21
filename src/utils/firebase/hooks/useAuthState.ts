import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";

import { auth } from "../instance";
import { Store } from "../../contexts";

// hook for get user
export const useAuthState = () => {
    const [user, setUser] = useState<Store["user"]>({} as User);

    useEffect(() => {
        const listener = onAuthStateChanged(auth, async (user) => {
            setUser(user as User);
        });

        return () => {
            listener();
        };
    }, [auth]);

    return { user };
};
