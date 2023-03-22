import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  
const firebaseConfig = {
    // Your Credentials
        apiKey: "AIzaSyCDB9k-Kh2Jii_RrY7D7WEunhO4tm_GKb8",
        authDomain: "react-firebase-22b5a.firebaseapp.com",
        databaseURL: "https://react-firebase-22b5a-default-rtdb.firebaseio.com",
        projectId: "react-firebase-22b5a",
        storageBucket: "react-firebase-22b5a.appspot.com",
        messagingSenderId: "137726952192",
        appId: "1:137726952192:web:25a660bb384e74ef9429e5"
      
};
export const Firebase = firebase.initializeApp(firebaseConfig);
