import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "..";

export const logInWithEmailAndPassword = async (
    email: User["email"],
    password: string
) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
    }
};
