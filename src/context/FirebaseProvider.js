import React, { createContext } from "react";
import { firebase } from "../lib/firebase.prod";

export const FirebaseContext = createContext(null);

export function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
}