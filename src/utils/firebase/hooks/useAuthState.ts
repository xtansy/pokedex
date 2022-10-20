import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../instance";
import { useEffect, useState } from "react";

// hook for get user
export const useAuthState = () => {
    const [user, setUser] = useState<null | User>(null);

    useEffect(() => {
        const listener = onAuthStateChanged(auth, async (user) => {
            setUser(user);
        });

        return () => {
            listener();
        };
    }, [auth]);

    return { user };
};
