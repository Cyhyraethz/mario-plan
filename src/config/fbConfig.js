import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCMGhRQOR1sv9Y0CDPUtG2JhM3RNGzMdG4',
  authDomain: 'mario-plan-ce319.firebaseapp.com',
  databaseURL: 'https://mario-plan-ce319.firebaseio.com',
  projectId: 'mario-plan-ce319',
  storageBucket: 'mario-plan-ce319.appspot.com',
  messagingSenderId: '116387621344',
  appId: '1:116387621344:web:8be1dc14b7e9c50902e385',
  measurementId: 'G-GQMPVPT602'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
