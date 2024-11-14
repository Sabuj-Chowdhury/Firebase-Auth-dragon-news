// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjzUEWHbpfcpEFwim7PAUnmke8VoCFrcw",
  authDomain: "dragon-news-ed662.firebaseapp.com",
  projectId: "dragon-news-ed662",
  storageBucket: "dragon-news-ed662.firebasestorage.app",
  messagingSenderId: "542585727449",
  appId: "1:542585727449:web:859a0573590a11936b51c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
