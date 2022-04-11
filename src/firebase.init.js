// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTe1OjwebWELyNaslSyxpkNimhdx1y_WA",
    authDomain: "fir-authentication-testpro.firebaseapp.com",
    projectId: "fir-authentication-testpro",
    storageBucket: "fir-authentication-testpro.appspot.com",
    messagingSenderId: "368189164048",
    appId: "1:368189164048:web:5caf701173a46e38e11895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;