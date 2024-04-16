import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACt2yrnhqutcMVDmOFLluoXWHzr3HqJxY",
  authDomain: "nestseekersplace.firebaseapp.com",
  projectId: "nestseekersplace",
  storageBucket: "nestseekersplace.appspot.com",
  messagingSenderId: "149266856868",
  appId: "1:149266856868:web:e198defd3e10fba5ad5f31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;