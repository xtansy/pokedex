import { doc, getDoc } from "firebase/firestore";
import { database } from "../firebase/instance";

export const checkDocumentExist = async (collection: string, id: string) => {
    const docSnap = await getDoc(doc(database, collection, id));
    if (docSnap.exists()) return true;
    return false;
};
