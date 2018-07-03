import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";
import ViewVote from "./ViewVote";
import { API_KEY } from 'react-native-dotenv'

const getUrl = "https://api.propublica.org/congress/v1/senate/votes/recent.json";
const options = {
  headers: new Headers({
    "X-API-Key": API_KEY
  })
};


function billSummary({ results }) {
  const { vote } = results.votes;
  const objectVote = {
    congressId: vote.congress,
    sessionId: vote.session,
    rollCallId: vote.roll_call,
    billId: vote.bill.number,
    billDescription: vote.description,
    voteResult: vote.result,
    summary: voteSummary(vote)
  };
  return objectVote;
}

function voteSummary({ positions }) {
  return positions.reduce((summary, senator) => {
    if (!summary[senator.state]) {
      summary[senator.state] = {};
    }
    summary[senator.state][senator.name] = senator.vote_position;
    return summary;
  }, {});
}

class SenatorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { summary: {} },
      currentState: "AK"
    };
  }
  componentDidMount() {
    fetch(getUrl, options)
      .then(response => response.json())
      .then(data => {
        let freshUrl = data.results.votes[0].vote_uri;
        return fetch(freshUrl, options)
          .then(response => response.json())
          .then(data => this.setState({ data: billSummary(data) }));
      })
      .catch(function(error) {
        console.log("ERROR BRAH " + error);
        throw error;
      });
  }
  render() {
    return (
      <View style={styles.containerBill}>
        {this.state.data.summary &&
          this.state.data.summary[this.props.currentState] && (
            <ViewVote
              senators={Object.keys(
                this.state.data.summary[this.props.currentState]
              )}
              votes={this.state.data.summary[this.props.currentState]}
            />
          )}
      </View>
    );
  }
}

export default SenatorInfo;
