import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqSzbDH5PPBXkOOUXBtLczv7pFHAESyCk",
  authDomain: "facebookmessengerclone-30139.firebaseapp.com",
  databaseURL: "https://facebookmessengerclone-30139.firebaseio.com",
  projectId: "facebookmessengerclone-30139",
  storageBucket: "facebookmessengerclone-30139.appspot.com",
  messagingSenderId: "447322633523",
  appId: "1:447322633523:web:fbc801889959f58d59ba46",
  measurementId: "G-TFSK4GF7XZ"
});

const db=firebaseApp.firestore();
export default db;