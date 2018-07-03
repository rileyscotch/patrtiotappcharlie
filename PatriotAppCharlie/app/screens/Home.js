import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { Actions } from 'react-native-router-flux'

import { MyContainer } from "../components/MyContainer";
import { Logo } from "../components/Logo";
import { ProfileButton } from "../components/Profile";

class Home extends Component {
  
  render() {
    return (
      <MyContainer>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <ProfileButton
          buttonText={"Sign Up"}
          onPress={() => Actions.signup()}
        />
        <ProfileButton
          buttonText={"Log In"}
          onPress={() => Actions.login()}
        />
      </MyContainer>
    );
  }
}

export default Home;
