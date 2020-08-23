import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAe08jLH0E5b5V5gRgXrW9C5GDG34tAv54",
    authDomain: "crwn-db-357fb.firebaseapp.com",
    databaseURL: "https://crwn-db-357fb.firebaseio.com",
    projectId: "crwn-db-357fb",
    storageBucket: "crwn-db-357fb.appspot.com",
    messagingSenderId: "818924125069",
    appId: "1:818924125069:web:45e212b3483e3bd7cf5bc4",
    measurementId: "G-5SWPBRDLXN"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;