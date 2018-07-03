import App from "./app/index";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFQwtlCegnJBzoAleFtHkSaCbow5qMuVA",
  authDomain: "patriotapp-charlie.firebaseapp.com",
  databaseURL: "https://patriotapp-charlie.firebaseio.com",
  projectId: "patriotapp-charlie",
  storageBucket: "",
  messagingSenderId: "1087204136347"
};

firebase.initializeApp(firebaseConfig);

export default App;
