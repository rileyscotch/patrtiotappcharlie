import PropTypes from "prop-types";
import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <Image
      resizeMode={"contain"}
      style={styles.containerImage}
      source={require("./crisplogo.png")}
    />
    <Text style={styles.text}>Greetings Citizen!</Text>
  </View>
);

export default Logo;
