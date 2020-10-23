import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: "netflix-scrimba-clone.firebaseapp.com",
  databaseURL: "https://netflix-scrimba-clone.firebaseio.com",
  projectId: "netflix-scrimba-clone",
  storageBucket: "netflix-scrimba-clone.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,

  document.getElementById("root")
);
