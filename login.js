// login.js
import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    try {
        // Firebase Auth Login
        await signInWithEmailAndPassword(auth, email, password);

        // Success: Loading Screen पर भेजें
        alert("Login Successful! Redirecting...");
        window.location.href = "dashboard.html";

    } catch (error) {
        console.error("Login Error:", error.message);
        alert("Login Failed: User ID या Password गलत है।");
    }
});