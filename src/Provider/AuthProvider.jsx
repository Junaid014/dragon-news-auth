import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.init';

 const auth =getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LoginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser=()=>{
        return signOut(auth);
    }

    // check whether the user is there or not by unsubscribe
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
           
        })
        return()=>{
            unSubscribe();
        }
        
    },[])

    const userInfo={
        user,
        createUser,
        LoginUser,
        signOutUser,
        loading,
        setLoading
    }




    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;