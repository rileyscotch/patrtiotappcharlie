import React, { Component } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { MyContainer } from "../components/MyContainer";
import { ProfileButton } from "../components/Profile";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label
} from "native-base";
import * as firebase from "firebase";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 8) {
        alert("Password Must be at Least 8 Characters");
        return;
      }
      alert('Success! Welcom to the Front Lines!')
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Error brah: ", error);
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel style={styles.input}>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label>Password</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <ProfileButton
            title="Sign In"
            buttonText={"Sign Up"}
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          />
        </Form>
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
    flex: 1,
    backgroundColor: "$primaryBlue",
    justifyContent: "center",
    padding: 10
  },
  fields: {
    height: "30%",
    width: "100%",
    flex: -1,
    backgroundColor: "$snowWhite"
  }
});
