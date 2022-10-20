import {
    collection as col,
    DocumentData,
    WithFieldValue,
} from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { database } from "../instance";

export const addDocument = <T extends WithFieldValue<DocumentData>>(
    collection: string,
    data: T
) => {
    return addDoc(col(database, collection), data);
};
