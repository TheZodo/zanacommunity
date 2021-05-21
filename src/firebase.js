import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAb9DZoiZBDYZxJ9-l02gZkbZp_cR4tKOA",
    authDomain: "zanacommunity-7f540.firebaseapp.com",
    projectId: "zanacommunity-7f540",
    storageBucket: "zanacommunity-7f540.appspot.com",
    messagingSenderId: "708467488155",
    appId: "1:708467488155:web:aadbe2dbdeb5d696ca5d3e",
    measurementId: "G-YZGBRD88PT"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};
  export default db;