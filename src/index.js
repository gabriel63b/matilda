import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {firebase} from './app'
// import 'firebase/firestore'
import reportWebVitals from './reportWebVitals';

// const app = firebase.initializeApp ({
//   apiKey: "AIzaSyAuRfICqjuzs2yHIGMkB73bGbTN4kY-EjM",
//   authDomain: "matilda-empanadas.firebaseapp.com",
//   projectId: "matilda-empanadas",
//   storageBucket: "matilda-empanadas.appspot.com",
//   messagingSenderId: "367744826421",
//   appId: "1:367744826421:web:797d30807481ee818dc57c"
// });

// export function getFirebase(){
//   return app;
// }

// export function getFirestore() {
//   return firebase.firestore(app)
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
