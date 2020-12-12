import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: "AIzaSyBuoyr9Pghf2YxIiI1r3JpqULQCYogL0k4",
  authDomain: "softuni-angular-examp.firebaseapp.com",
  projectId: "softuni-angular-examp",
  storageBucket: "softuni-angular-examp.appspot.com",
  messagingSenderId: "28417208246",
  appId: "1:28417208246:web:3068692b00f3d32f341b17",
  measurementId: "G-WX75MBX77B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {
  db,
  auth,
  storage
}
