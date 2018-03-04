import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyBRfOEyILbv7KwJjCOhxJG5Wkj_oYDTpHs",
  authDomain: "task-5393d.firebaseapp.com",
  databaseURL: "https://task-5393d.firebaseio.com",
  projectId: "task-5393d",
  storageBucket: "task-5393d.appspot.com",
  messagingSenderId: "1009826994438"
};

const devConfig = {
  apiKey: "AIzaSyBRfOEyILbv7KwJjCOhxJG5Wkj_oYDTpHs",
  authDomain: "task-5393d.firebaseapp.com",
  databaseURL: "https://task-5393d.firebaseio.com",
  projectId: "task-5393d",
  storageBucket: "task-5393d.appspot.com",
  messagingSenderId: "1009826994438"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
