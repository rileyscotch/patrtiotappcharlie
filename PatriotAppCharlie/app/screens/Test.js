import React, { Component } from "react";

import { MyContainer } from "../components/MyContainer";
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
      <MyContainer>
        <BillInfo />
        <SenatorInfo currentState={this.state.userState} />
        <StatePicker
          currentState={this.state.userState}
          updateUserState={this.updateUserState}
        />
      </MyContainer>
    );
  }
}

export default Test;
