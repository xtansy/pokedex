import { auth } from "../instance";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDocument } from "./addDocument";

export const registerWithEmailAndPassword = async (
    user: Omit<SignUpProps, "password">,
    password: string
) => {
    const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        password
    );

    const data = { ...user, uid: response.user.uid, pokemons: [] };
    await addDocument<Omit<SignUpProps, "password">>(
        "users",
        data,
        response.user.uid
    );
    return data;
};
