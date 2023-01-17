import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "process.env.REACT_APP_API_KEY",
  authDomain: "bug-hunter-issue-tracker.firebaseapp.com",
  databaseURL: "https://bug-hunter-issue-tracker-default-rtdb.firebaseio.com",
  projectId: "bug-hunter-issue-tracker",
  storageBucket: "bug-hunter-issue-tracker.appspot.com",
  messagingSenderId: "112444272666",
  appId: "1:112444272666:web:198f04392279bd6b8921a3",
  measurementId: "G-XMQJB8WPLS",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
