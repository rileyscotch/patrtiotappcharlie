import React, { Component } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Input } from "react-native-elements";

import { Container } from "../components/Container";
import { ProfileButton } from "../components/Profile";

class SignUp extends Component {
  render() {
    return (
      <Container>
        <Input placeholder="BASIC INPUT" />
        <ProfileButton title="Sign In" buttonText={"Sign Up"} />
      </Container>
    );
  }
}

export default SignUp;

const INPUT_HEIGHT = 48;
const styles = EStyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#2e598f",
    margin: 10,
    marginVertical: 11,
    padding: 10
  },
  container: {
    flex: 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "90%",
    height: INPUT_HEIGHT,
    borderRadius: 4,
    marginVertical: 11
  }
});
