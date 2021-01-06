import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAy1e9FCBs5yqquW_yp6qPiD9yK8jcO4HA",
    authDomain: "whatsapp-web-clone-22749.firebaseapp.com",
    projectId: "whatsapp-web-clone-22749",
    storageBucket: "whatsapp-web-clone-22749.appspot.com",
    messagingSenderId: "74176226277",
    appId: "1:74176226277:web:a847a7ec4451f51fc9450c",
    measurementId: "G-CES8W5J78K"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();
