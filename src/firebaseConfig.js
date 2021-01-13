import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'kanbanboard-61aa3.firebaseapp.com',
  databaseURL: 'https://kanbanboard-61aa3-default-rtdb.firebaseio.com',
  projectId: 'kanbanboard-61aa3',
  storageBucket: 'kanbanboard-61aa3.appspot.com',
  messagingSenderId: '615871772678',
  appId: '1:615871772678:web:63766e84ca845b55aeeb87',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
