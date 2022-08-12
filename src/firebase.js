// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHo2YBKryO8bTGvgNfm_PxYcd2F7ssyXk",
  authDomain: "chat-app-687.firebaseapp.com",
  projectId: "chat-app-687",
  storageBucket: "chat-app-687.appspot.com",
  messagingSenderId: "516361662322",
  appId: "1:516361662322:web:d8052c0abb20670e8037eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)