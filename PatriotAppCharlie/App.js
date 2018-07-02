import App from "./app/index";
import Amplify, { Auth } from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
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

Amplify.configure(config);

// export default withAuthenticator(App, true);

export default App;
