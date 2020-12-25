import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

// need to seed the database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: "netflix-clone-e0b2d.firebaseapp.com",
  projectId: "netflix-clone-e0b2d",
  storageBucket: "netflix-clone-e0b2d.appspot.com",
  messagingSenderId: "258608467775",
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };
