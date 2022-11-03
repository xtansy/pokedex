import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../instance";
import { addDocument } from "./addDocument";
import { checkDocumentExist, getUserFromFirebase } from "../../helpers";

export const logInWithGoogle = async () => {
    const response = await signInWithPopup(auth, googleProvider);

    if (!(await checkDocumentExist("users", response.user.uid))) {
        await addDocument(
            "users",
            getUserFromFirebase(response),
            response.user.uid
        );
        return response;
    }

    return response;
};
