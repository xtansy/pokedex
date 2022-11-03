import { doc, updateDoc } from "firebase/firestore";
import { database } from "../instance";

export const updateDocument = async (
    collection: string,
    id: string,
    data: Partial<User>
) => {
    const ref = doc(database, collection, id);

    return await updateDoc(ref, {
        ...data,
    });
};
