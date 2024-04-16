import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            setUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };

    const signInWithGithub = async () => {
        try {
            const provider = new GithubAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            setUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
        });
        return() => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user, createUser, signIn, logOut, signInWithGoogle,
        signInWithGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider