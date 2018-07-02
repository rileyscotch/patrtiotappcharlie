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

class SignUp extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.fields}>
          <Form>
            <Item inlineLabel style={styles.input}>
              <Label>Email</Label>
              <Input
              autoCorrect={false}
              autoCapitalize='none'
               />
            </Item>
            <Item inlineLabel style={styles.input}>
              <Label>Password</Label>
              <Input
              autoCorrect={false}
              autoCapitalize='none'
              secureTextEntry={true}
               />
            </Item>
          </Form>
        </Content>
        <ProfileButton title="Sign In" buttonText={"Sign Up"} />
      </Container>
    );
  }
}

export default SignUp;

const INPUT_HEIGHT = 48;
const styles = EStyleSheet.create({
//   input: {
//     height: 50,
//     borderBottomWidth: 2,
//     borderBottomColor: "#2e598f",
//     margin: 10,
//     marginVertical: 11,
//     padding: 10
//   },
  container: {
    flex: 1,
    backgroundColor: "$primaryBlue",
    justifyContent: "center",
    padding: 10,
  },
  fields: {
    height: "30%",
    width: "100%",
    flex: -1,
    backgroundColor: '$snowWhite'
  }
});
