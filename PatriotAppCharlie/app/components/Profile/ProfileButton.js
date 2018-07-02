import React, { PropTypes } from "react";
import {
  Text,
  TouchableHighlight,
  TextInput,
  View
} from "react-native";

import styles from "./styles";

const ProfileButton = ({ onPress, buttonText }) => (
  <TouchableHighlight
    activeOpacity={.5}
    underlayColor={"#f1f1f1"}
    style={styles.container}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableHighlight>
);

export default ProfileButton;
