import React, { Component } from "react";
import { MyContainer } from "../components/MyContainer";
import { BillInfo } from "../components/BillInfo";
import { StatePicker } from "../components/StatePicker";
import SenatorInfo from "../components/SenatorInfo/SenatorInfo";
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native";
import { ProfileButton } from "../components/Profile"


class Test extends Component {
  state = { userState: "AK" };
  updateUserState = chosenState => {
    this.setState({ userState: chosenState });
  };
  render() {
    return (
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#a4b6c1",
      }}>
        <BillInfo />
        <SenatorInfo currentState={this.state.userState} />
        <StatePicker
          currentState={this.state.userState}
          updateUserState={this.updateUserState}
        />
        <ProfileButton
        title="Save This"
            buttonText={"Save This"}
            onPress={() =>
              Actions.next()
            } />
      </ScrollView>
    );
  }
}

export default Test;
