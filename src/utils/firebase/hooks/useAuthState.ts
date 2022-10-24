import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../instance";
import { usePromise } from "../../hooks";

// hook for get user
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
