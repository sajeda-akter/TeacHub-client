import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types';

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const userUpdate = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      // photoURL: photoURL,
    });
  };
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("obserb ");
      setLoading(false);
      setUser(currentUser);
    });
    return () => unSubcribe();
  }, []);
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    userSignin,
    logOut,
    googleSignin,
    githubSignin,
    userUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes={
    children:PropTypes.array
}

export default AuthProvider;
