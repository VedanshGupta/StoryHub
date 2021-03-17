import { firebase } from '@firebase/app';
require('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyCumPvd16yZp4YmTifq-gFB5ROElhtSr0A",
    authDomain: "story-hub-e6bd8.firebaseapp.com",
    projectId: "story-hub-e6bd8",
    storageBucket: "story-hub-e6bd8.appspot.com",
    messagingSenderId: "377051564663",
    appId: "1:377051564663:web:4dd56d1c605b4b0da4d472"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();