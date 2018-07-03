import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Router, Scene } from "react-native-router-flux";


import Home from "./screens/Home";
import Test from "./screens/Test";
import SignUp from "./screens/SignUp";
import Splash from "./screens/Splash";
import LogIn from "./screens/LogIn";

export default () => (
  <Router>
    <Scene key="root">
      <Scene key="splash" component={Splash} initial={true} hideNavBar={true} />
      <Scene key="home" component={Home} hideNavBar={true} />
      <Scene key="login" component={LogIn} title="Log In" />
      <Scene key="signup" component={SignUp} title="Creat an Account" />
      <Scene key="test" component={Test} hideNavBar={true} />
    </Scene>
  </Router>
);

EStyleSheet.build({
  $snowWhite: "#ffffff",
  $primaryBlue: "#a4b6c1",
  $white: "#ebead9",
  $red: "#940f15",
  $medBlue: "#2e598f",
  $navyBlue: "#0c2141",
  $democratBlue: "#44bdf3",
  $republicanRed: "#d40000"

  // outline: 1
});
