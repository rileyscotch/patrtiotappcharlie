import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { Container } from "../components/Container";
import { ProfileButton } from "../components/Profile";

class SignUp extends Component {

  render() {
    return (
      <Container>
        <TextInput
          onChangeText={value => this.onChangeText("email", value)}
          style={styles.container}
          placeholder="Email"
        />
        <TextInput
          onChangeText={value => this.onChangeText("password", value)}
          style={styles.container}
          secureTextEntry={true}
          placeholder="Password"
        />
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
