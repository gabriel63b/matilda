import firebase from 'firebase'
import 'firebase/storage'
import '@firebase/firestore'

const app = firebase.initializeApp ({
  apiKey: "AIzaSyAuRfICqjuzs2yHIGMkB73bGbTN4kY-EjM",
  authDomain: "matilda-empanadas.firebaseapp.com",
  projectId: "matilda-empanadas",
  storageBucket: "matilda-empanadas.appspot.com",
  messagingSenderId: "367744826421",
  appId: "1:367744826421:web:797d30807481ee818dc57c"
});

export function getFirebase(){
 return app;
}

export function getFirestore() {
return firebase.firestore(app)
}

const storage = firebase.storage();
const auth = firebase.auth();

export { storage, auth, firebase as default };


