import React from "react";
import { View, Text } from "react-native";
import styles from './styles'

const ViewVote = ({ senators, votes }) => {
  return (
    <View style={styles.containerBill}>
      {senators.map(senator => {
        return (
          <Text style={styles.senatorText}>
            {senator}: {votes[senator]}
          </Text>
        );
      })}
    </View>
  );
};

export default ViewVote;
