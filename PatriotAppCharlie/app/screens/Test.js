import React, { Component } from "react";

import { Container } from "../components/Container";
import { BillInfo } from "../components/BillInfo";
import { StatePicker } from "../components/StatePicker";
import SenatorInfo from "../components/SenatorInfo/SenatorInfo";

class Test extends Component {
  state = { userState: "AK" };
  updateUserState = chosenState => {
    this.setState({ userState: chosenState });
  };
  render() {
    return (
      <Container>
        <BillInfo />
        <SenatorInfo currentState={this.state.userState} />
        <StatePicker
          currentState={this.state.userState}
          updateUserState={this.updateUserState}
        />
      </Container>
    );
  }
}

export default Test;
