import { useState, useEffect, useContext } from "react";
import { useFirebase } from "./FirebaseHooks";

export default function useAuthListener() {
  // use JSON.parse(localStorage) to check if the user is in localStorage
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const firebase = useFirebase();

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  //   console.log("user = ", user);
  return { user };
}
