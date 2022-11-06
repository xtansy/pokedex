import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { doc } from "firebase/firestore";

import { auth } from "../instance";
import { usePromise } from "../../hooks";
import { database } from "../instance";

// core hook for check auth, check user firestore
export const useAuthState = () => {
    const {
        data,
        setData,
        setError,
        isError,
        isLoading,
        errorMessage,
        setLoading,
    } = usePromise<User>();

    useEffect(() => {
        const listener = onAuthStateChanged(
            auth,
            async (user) => {
                if (!user) return setData(null);
                const unsub = onSnapshot(
                    doc(database, "users", user.uid),
                    (doc) => {
                        const userData = doc.data() as User;
                        setData(userData);
                    },
                    (err) => {
                        setError(err.message);
                        setLoading(false);
                    },
                    () => {
                        unsub();
                    }
                );
            },
            (error) => {
                setLoading(false);
                setError(error.message);
            }
        );

        return () => {
            listener();
        };
    }, [auth]);

    console.log({
        isAuth: !!data,
        user: data,
        setData,
        setError,
        isError,
        isLoading,
        errorMessage,
        setLoading,
    });

    return {
        isAuth: !!data,
        user: data,
        setData,
        setError,
        isError,
        isLoading,
        errorMessage,
        setLoading,
    };
};
