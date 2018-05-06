import firebase from 'firebase';
require('firebase/firestore')


const config = {
    apiKey: "AIzaSyBhG5x-5aHr9JjHet7caDrb_7hlxrSO73w",
    authDomain: "practiceapp-44a06.firebaseapp.com",
    databaseURL: "https://practiceapp-44a06.firebaseio.com",
    projectId: "practiceapp-44a06",
    storageBucket: "practiceapp-44a06.appspot.com",
    messagingSenderId: "673332258241"
  };


const firebaseApp = firebase.initializeApp(config);
const database = firebase.firestore();
const settings = {timestampsInSnapshots: true};
database.settings(settings);
export const db = database;
