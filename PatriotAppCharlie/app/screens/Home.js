import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { Actions } from 'react-native-router-flux'

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { ProfileButton } from "../components/Profile";

class Home extends Component {
  
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <ProfileButton
          buttonText={"Sign Up"}
          onPress={() => Actions.signup()}
        />
        <ProfileButton
          buttonText={"Log In"}
          onPress={() => Actions.test()}
        />
      </Container>
    );
  }
}

export default Home;
