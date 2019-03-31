import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCVR6sk-emQr8_LA0ksaebFTsOT0LrwQAk",
  authDomain: "ironauction-98f23.firebaseapp.com",
  databaseURL: "https://ironauction-98f23.firebaseio.com",
  storageBucket: "ironauction-98f23.appspot.com",
  messagingSenderId: "517800130180"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));
