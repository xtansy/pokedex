import { useEffect, useState } from "react";
import { onSnapshot, Query } from "firebase/firestore";

import { usePromise } from "../../hooks";

export const useCollection = <T>(query: Query<T>) => {
    const { data, setData, setError, isError, isLoading, errorMessage } =
        usePromise<T[]>();
    useEffect(() => {
        const unsub = onSnapshot(
            query,
            (querySnapshot) => {
                const data: T[] = [];
                querySnapshot.forEach((doc) => {
                    data.push(doc.data());
                });
                setData(data);
            },
            (error) => {
                setError(error.message);
            }
        );

        return () => unsub();
    }, []);

    return { data, isError, isLoading, errorMessage };
};
