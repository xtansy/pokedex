import { auth } from "../index";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerWithEmailAndPassword = async (
    user: User,
    password: string
) => {
    try {
        const res = await createUserWithEmailAndPassword(
            auth,
            user.email,
            password
        );
        // const userFirebase = res.user;
        // await addDoc(collection(db, "users"), {
        //     uid: userFirebase.uid,
        //     ...user,
        //     authProvider: "local",
        // });
    } catch (err) {
        console.error(err);
    }
};
