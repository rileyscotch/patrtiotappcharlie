import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Router, Scene } from "react-native-router-flux";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Test from "./screens/Test";

export default () => (
  <Router>
  <Scene key="root">
    <Scene key="login" component={Home} title="Welcome" initial/>
    <Scene key="test" component={Test} title="Information" />
    </Scene>
  </Router>
);

EStyleSheet.build({
  $primaryBlue: "#a4b6c1",
  $white: "#ebead9",
  $red: "#940f15",
  $medBlue: "#2e598f",
  $navyBlue: "#0c2141",
  $democratBlue: "#44bdf3",
  $republicanRed: "#d40000",

  outline: 1
});
