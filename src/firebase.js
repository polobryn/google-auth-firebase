// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9slOvh4EMwfhHFZDoPkAnkPo3ebG413c",
  authDomain: "auth-fb-643b2.firebaseapp.com",
  projectId: "auth-fb-643b2",
  storageBucket: "auth-fb-643b2.appspot.com",
  messagingSenderId: "819502869219",
  appId: "1:819502869219:web:9d1964155ef566a1bbb3d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);