import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTUXRHB1Uw1kKAgZdHwVGLHBiY25AyoNI",
    authDomain: "pokedex-4fd86.firebaseapp.com",
    projectId: "pokedex-4fd86",
    storageBucket: "pokedex-4fd86.appspot.com",
    messagingSenderId: "84788716064",
    appId: "1:84788716064:web:ad7d41769e4f2ac188d245",
    measurementId: "G-SSJ95T6Q6C",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export type User = {
    email: string;
    firstName: string;
    lastName: string;
    city: string;
};

export const logInWithEmailAndPassword = async (
    user: User,
    password: string
) => {
    try {
        await signInWithEmailAndPassword(auth, user.email, password);
    } catch (err) {
        console.error(err);
    }
};

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
        const userFirebase = res.user;
        await addDoc(collection(db, "users"), {
            uid: userFirebase.uid,
            ...user,
            authProvider: "local",
        });
    } catch (err) {
        console.error(err);
    }
};
