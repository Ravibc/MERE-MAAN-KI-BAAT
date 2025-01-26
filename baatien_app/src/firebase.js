import firebase from 'firebase';
//import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "add your own api key",
  authDomain: "your_databsase_name.firebaseapp.com",
  projectId: "your_databsase_name",
  storageBucket: "your_databsase_name.firebasestorage.app",
  messagingSenderId: "466018263491",
  appId: "Your_app_ID",
  measurementId: "Your_measurment_id"
};

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
