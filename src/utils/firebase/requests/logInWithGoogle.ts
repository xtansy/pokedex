import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../instance";

export const logInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
};
