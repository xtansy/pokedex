import { onSnapshot, Query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useCollection = <T>(query: Query<T>) => {
    const [data, setData] = useState<T[] | null>(null);
    useEffect(() => {
        const unsub = onSnapshot(query, (querySnapshot) => {
            const data: T[] = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setData(data);
        });

        return () => unsub();
    }, []);

    return { data };
};
