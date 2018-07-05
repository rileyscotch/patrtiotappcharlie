import React from "react";
import { Text } from "native-base";
import styles from "./styles";

const ViewVote = ({ senators, votes }) => {
  return (
    <React.Fragment>
      {senators.map(senator => {
        return (
          <Text key={senator} style={styles.senatorText}>
            {senator}: {votes[senator]}
          </Text>
        );
      })}
    </React.Fragment>
  );
};

export default ViewVote;
