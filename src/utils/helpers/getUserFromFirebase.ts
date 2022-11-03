import { UserCredential } from "firebase/auth";

export const getUserFromFirebase = (firebaseUser: UserCredential) => {
    return {
        city: null,
        displayName: firebaseUser.user.displayName,
        email: firebaseUser.user.email,
        phoneNumber: firebaseUser.user.phoneNumber,
        photoURL: firebaseUser.user.photoURL,
        uid: firebaseUser.user.uid,
        pokemons: [],
    };
};
