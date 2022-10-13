import { auth } from "../instance";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerWithEmailAndPassword = async (
    user: User,
    password: string
) => {
    return await createUserWithEmailAndPassword(auth, user.email, password);
};
