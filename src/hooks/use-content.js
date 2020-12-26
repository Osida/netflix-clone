import { useState, useEffect, useContext } from "react";
import { useFirebase } from "./FirebaseHooks";

// target is either series for films
export default function useContent(target) {
  const [content, setContent] = useState([]);
  const firebase = useFirebase();

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docID: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // return () => {
    //   cleanup;
    // };
  }, []);

  return { [target]: content };
}
