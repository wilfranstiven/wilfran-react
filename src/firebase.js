import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbYbk-BETp1xWw8gesZMpVEcW89cSVtag",
  authDomain: "mi-primer-proyecto-eaa54.firebaseapp.com",
  projectId: "mi-primer-proyecto-eaa54",
  storageBucket: "mi-primer-proyecto-eaa54.firebasestorage.app",
  messagingSenderId: "194161425785",
  appId: "1:194161425785:web:f9da97474f56ac51a3c3a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
