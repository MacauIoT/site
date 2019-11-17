import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBs6wDSEqVcXcljbTYpBAsCIXkl7kywWAY",
  authDomain: "macauiot-air-demo.firebaseapp.com",
  databaseURL: "https://macauiot-air-demo.firebaseio.com",
  projectId: "macauiot-air-demo",
  storageBucket: "macauiot-air-demo.appspot.com",
  messagingSenderId: "726421528119",
  appId: "1:726421528119:web:c33d5e19dbdc1c57fca9b2",
  measurementId: "G-HWMZHM2KHC"
};

export default (!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app());

export { firebase };
