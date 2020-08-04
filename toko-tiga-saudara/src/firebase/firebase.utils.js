import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAcoV852L74zQCjFTtnkA9UsDGUbnc_o-I",
        authDomain: "crwn-db-20e7d.firebaseapp.com",
        databaseURL: "https://crwn-db-20e7d.firebaseio.com",
        projectId: "crwn-db-20e7d",
        storageBucket: "crwn-db-20e7d.appspot.com",
        messagingSenderId: "4062774435",
        appId: "1:4062774435:web:2b32f4729a84a7be912b16"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;