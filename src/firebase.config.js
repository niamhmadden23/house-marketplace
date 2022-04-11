import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC20qgb-orO6g7yKTH5yyEDnWu2wpeyMfI",
  authDomain: "house-marketplace-app-204e3.firebaseapp.com",
  projectId: "house-marketplace-app-204e3",
  storageBucket: "house-marketplace-app-204e3.appspot.com",
  messagingSenderId: "160468201127",
  appId: "1:160468201127:web:066dc3c77ecfb6c2e3f582",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
