import React from 'react';
import { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext({})

const auth = getAuth(app);

const AuthProvider = ({Children}) => {
    const user = {
        displayName : 'Muri Khan'
    }
    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

