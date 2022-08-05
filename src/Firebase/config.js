// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFpaRgqOsixlsZxVsVvebLLIbkyKq1uxk",
  authDomain: "la-licorera-5ae1b.firebaseapp.com",
  projectId: "la-licorera-5ae1b",
  storageBucket: "la-licorera-5ae1b.appspot.com",
  messagingSenderId: "650415915535",
  appId: "1:650415915535:web:4ec793124bfc8feb7b197a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
