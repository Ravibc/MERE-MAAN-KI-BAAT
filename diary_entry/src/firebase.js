import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHr5nbkWrKLGJrdLX9Gm72MHN089Xrvhs",
    authDomain: "baatien-sab.firebaseapp.com",
    projectId: "baatien-sab",
    storageBucket: "baatien-sab.firebasestorage.app",
    messagingSenderId: "466018263491",
    appId: "1:466018263491:web:ca7ac69b6a8393a405dd76",
    measurementId: "G-CDST10WNDD"
});

const db = firebaseApp.firestore();

export default db;