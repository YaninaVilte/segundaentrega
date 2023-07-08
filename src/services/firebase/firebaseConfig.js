
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_APY_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJET_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

const auth = getAuth(app);

export const login = async ({ email, password }) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
    }
};

export const register = async ({ email, password }) => {
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
    }
};

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
    try {
        return await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error(error);
    }
};
