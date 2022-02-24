import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDO4ytVt9FOyL2b6tsi7k6IOyUR0lNp1J8",
    authDomain: "linkedin-clone-4a026.firebaseapp.com",
    projectId: "linkedin-clone-4a026",
    storageBucket: "linkedin-clone-4a026.appspot.com",
    messagingSenderId: "461814060052",
    appId: "1:461814060052:web:ac39ff09ad704901c64301"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };