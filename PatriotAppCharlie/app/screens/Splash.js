import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import { Actions } from "react-native-router-flux";
import EStyleSheet from "react-native-extended-stylesheet";
import { Home } from './Home'

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.home();
    }, 2000);
  }

  render() {
    return (
      <View style={styles.splashPage}>
        <Image
          source={require("../components/Logo/crisplogo.png")}
          style={styles.splashLogo}
        />
      </View>
    );
  }
}
const imageWidth = Dimensions.get("window").width / 2;
const styles = EStyleSheet.create({
  splashPage: {
    flex: 1,
    backgroundColor: "$primaryBlue",
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashLogo: {
    width: imageWidth,
    height: imageWidth
  }
});
