import React from "react";
import { View, Text } from "react-native";
import styles from './styles'

const ViewVote = ({ senators, votes }) => {
//   console.log("Log Z", senators, votes);
  return (
    <View>
      {senators.map(senator => {
        return (
          <Text style={styles.buttonText}>
            {senator}: {votes[senator]}
          </Text>
        );
      })}
    </View>
  );
};

export default ViewVote;
