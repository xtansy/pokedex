import {
    collection as col,
    doc,
    DocumentData,
    setDoc,
    WithFieldValue,
} from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { database } from "../instance";

export const addDocument = async <T extends WithFieldValue<DocumentData>>(
    collection: string,
    data: T,
    id?: string
) => {
    if (id) {
        const documentRef = doc(database, collection, id);
        await setDoc(documentRef, data);
        return data;
    }
    return addDoc(col(database, collection), data);
};
