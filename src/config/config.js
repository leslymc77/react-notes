import firebase from 'firebase';

const DB_CONFIG = {
    apiKey: "AIzaSyC7fL6tVocopov3uljx1asuaFliEbtYzyc",
    authDomain: "notesreact-66b17.firebaseapp.com",
    projectId: "notesreact-66b17",
    storageBucket: "notesreact-66b17.appspot.com",
    messagingSenderId: "1001344397073",
    appId: "1:1001344397073:web:dbfc714fa7840a002ea6b0"
}

const app = firebase.initializeApp(DB_CONFIG);

export default app;