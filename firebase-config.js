// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// अपना Firebase Config यहाँ डालें (Firebase Console से लें)
const firebaseConfig = {
    apiKey: "AIzaSyDzp9_D0ISFLqCOqfqSutXzZAi49IaZvEY",
    authDomain: "rssmahavidhyaleen.firebaseapp.com",
    projectId: "rssmahavidhyaleen",
    storageBucket: "rssmahavidhyaleen.firebasestorage.app",
    messagingSenderId: "575713871591",
    appId: "1:575713871591:web:dc3b78ba39b476de9e4442",
    measurementId: "G-RZTZT0FDTC"
};
// App Initialize करें
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);