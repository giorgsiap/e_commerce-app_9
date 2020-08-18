import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBY8QDR_54p8XrXmlasiRw_jY77z8Tsiq0",
    authDomain: "ecommercedb-8a56d.firebaseapp.com",
    databaseURL: "https://ecommercedb-8a56d.firebaseio.com",
    projectId: "ecommercedb-8a56d",
    storageBucket: "ecommercedb-8a56d.appspot.com",
    messagingSenderId: "45548255947",
    appId: "1:45548255947:web:6f26fe10cd8bfc8a68f94e",
    measurementId: "G-KRNEY6PBG2"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;