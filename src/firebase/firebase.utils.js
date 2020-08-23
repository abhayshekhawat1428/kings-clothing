import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDiFVd8KMcOG1ZbsqA644qUbg8Kp3x_itE",
    authDomain: "kings-db-53645.firebaseapp.com",
    databaseURL: "https://kings-db-53645.firebaseio.com",
    projectId: "kings-db-53645",
    storageBucket: "kings-db-53645.appspot.com",
    messagingSenderId: "951043337717",
    appId: "1:951043337717:web:46fea73b7d29b05adf84bc",
    measurementId: "G-N2L11G8R59"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;