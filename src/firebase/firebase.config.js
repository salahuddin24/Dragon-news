// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4XciHKlKpSzkn0lMKTpkNoRcTrCYt22k",
  authDomain: "dragon-news-cf4d7.firebaseapp.com",
  projectId: "dragon-news-cf4d7",
  storageBucket: "dragon-news-cf4d7.appspot.com",
  messagingSenderId: "695658477271",
  appId: "1:695658477271:web:375c512525f87617caa292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;