import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { doc } from "firebase/firestore";

import { auth } from "../instance";
import { usePromise } from "../../hooks";
import { database } from "../instance";

// hook for heck auth
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
                if (!user) return setLoading(false);
                setData(user);
            },
            (error) => {
                setError(error.message);
            }
        );

        return () => {
            listener();
        };
    }, [auth]);

    useEffect(() => {
        if (data) {
            const unsub = onSnapshot(
                doc(database, "users", data.uid),
                (doc) => {
                    console.log("Current data: ", doc.data());
                }
            );
            return () => {
                unsub();
            };
        }
    }, [data]);

    return {
        user: data,
        setData,
        setError,
        isError,
        isLoading,
        errorMessage,
        setLoading,
    };
};
