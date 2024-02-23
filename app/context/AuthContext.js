import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut,  onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';

const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleSignIn = async () => {
        try{
            const provider =  new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        }
        catch(e){
            console.log(e)
        }
    }
    
    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curretUser) => {
            setUser(curretUser);
        })
        return () => unsubscribe()
    }, [user])

    return (
        <AuthContext.Provider value={{user, googleSignIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}