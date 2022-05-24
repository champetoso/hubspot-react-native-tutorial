import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./config";

export const AuthContext = React.createContext({ user: null });

//const auth = getAuth();

const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = auth.currentUser;
    return { initializing: !user, user };
  });

  function onChange(user) {
    setState({ initializing: false, user });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, onChange);
    return () => unsubscribe();
  }, []);

  return state;
};

export const AuthProvider = ({ children }) => {
  const { initializing, user } = useAuth();
  if (initializing) return null;

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
