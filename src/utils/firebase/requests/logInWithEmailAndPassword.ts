import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../instance";

export const logInWithEmailAndPassword = async (
    email: User["email"],
    password: string
) => {
    return await signInWithEmailAndPassword(auth, email, password);
};
