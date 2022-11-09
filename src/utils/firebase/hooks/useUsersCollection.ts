import { collection, query, Query } from "firebase/firestore";

import { useCollection } from ".";
import { database } from "../instance";

export const useUsersCollection = () => {
    const q = query(collection(database, "users")) as Query<UserDocument>;
    return useCollection<UserDocument>(q);
};
