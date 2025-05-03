import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.init';

 const auth =getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LoginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser=()=>{
        return signOut(auth);
    }

    // check whether the user is there or not by unsubscribe
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
           
        })
        return()=>{
            unSubscribe();
        }
        
    },[])

    const userInfo={
        user,
        createUser,
        LoginUser,
        signOutUser
    }




    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;