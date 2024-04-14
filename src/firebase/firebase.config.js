// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNSP4DzhUVL6uavtWirShFUFx-BZfgt34",
  authDomain: "for-all-projects-82dba.firebaseapp.com",
  projectId: "for-all-projects-82dba",
  storageBucket: "for-all-projects-82dba.appspot.com",
  messagingSenderId: "914969111735",
  appId: "1:914969111735:web:cec40bee596aad1f1cf132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;