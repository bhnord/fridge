// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

//TODO: fix ts issue
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCinr6yt_l-Ed8kCbOnwALPPiDGMH1oqQA",
  authDomain: "fridge-95933.firebaseapp.com",
  databaseURL: "https://fridge-95933-default-rtdb.firebaseio.com",
  projectId: "fridge-95933",
  storageBucket: "fridge-95933.appspot.com",
  messagingSenderId: "739471264811",
  appId: "1:739471264811:web:8015f074567a65f46cae6e",
  measurementId: "G-4YYX1NLZK7",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

export { app, auth, db, getApp, getAuth, collection, addDoc };
