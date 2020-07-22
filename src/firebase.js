import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZbH_xQXtYo7rPoZAXsWhY5AcSdZ9IkbE",
    authDomain: "clone-f2d58.firebaseapp.com",
    databaseURL: "https://clone-f2d58.firebaseio.com",
    projectId: "clone-f2d58",
    storageBucket: "clone-f2d58.appspot.com",
    messagingSenderId: "395898448328",
    appId: "1:395898448328:web:b6577a250b2663617378fd",
    measurementId: "G-TYZVX2SP6K"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };