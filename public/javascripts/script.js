// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDDxkADGZ8nj2JeLojUJzaZ9Xmbbcm5lD0",
  authDomain: "callart-site.firebaseapp.com",
  projectId: "callart-site",
  storageBucket: "callart-site.appspot.com",
  messagingSenderId: "778571787756",
  appId: "1:778571787756:web:d44e1b81fd2b00af44a4c9",
  measurementId: "G-3PDVC656ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);