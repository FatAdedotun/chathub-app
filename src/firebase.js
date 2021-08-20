import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyD1v2RBOgp9vkh45Io-kmoTYOnvsEBFnZA",
    authDomain: "chat-hub-541d7.firebaseapp.com",
    projectId: "chat-hub-541d7",
    storageBucket: "chat-hub-541d7.appspot.com",
    messagingSenderId: "72031584091",
    appId: "1:72031584091:web:787dd1ec92b7dfc66de47e"
  }).auth();