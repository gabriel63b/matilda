import { firebase } from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAuRfICqjuzs2yHIGMkB73bGbTN4kY-EjM",
    authDomain: "matilda-empanadas.firebaseapp.com",
    projectId: "matilda-empanadas",
    storageBucket: "matilda-empanadas.appspot.com",
    messagingSenderId: "367744826421",
    appId: "1:367744826421:web:797d30807481ee818dc57c"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}
  