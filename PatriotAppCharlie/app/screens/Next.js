import React, { Component } from "react";
import { ScrollView } from "react-native";
import { MyContainer } from "../components/MyContainer";
import { BillInfo } from "../components/BillInfo";
import EStyleSheet from "react-native-extended-stylesheet";
import { StatePicker } from "../components/StatePicker";
import SenatorInfo from "../components/SenatorInfo/SenatorInfo";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";

class Next extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "#a4b6c1"
        }}
      >
        <Card style={styles.containerBill}>
          <Body>
            <Text style={styles.nameText}>H.R. 2</Text>
            <Text style={styles.summaryText}>
              A bill to provide for the reform and continuation of agricultural
              and other programs of the Department of Agriculture through fiscal
              year 2023, and for other purposes.
            </Text>
            <Text style={styles.resultText}>Passed</Text>
          </Body>
        </Card>
        <Card style={styles.containerBill}>
          <Body>
            <Text style={styles.senatorText}>Michael Bennet: Yes</Text>
            <Text style={styles.senatorText}>Cory Gardner: Yes</Text>
          </Body>
        </Card>
        <Card style={styles.containerBill}>
          <Body>
            <Text style={styles.nameText}>H.R. 5515</Text>
            <Text style={styles.summaryText}>
              National Defense Authorization Act for Fiscal Year 2019
            </Text>
            <Text style={styles.resultText}>Passed</Text>
          </Body>
        </Card>
        <Card style={styles.containerBill}>
          <Body>
            <Text style={styles.senatorText}>Michael Bennet: Yes</Text>
            <Text style={styles.senatorText}>Cory Gardner: Yes</Text>
          </Body>
        </Card>
        <Card style={styles.containerBill}>
          <Body>
            <Text style={styles.nameText}>S. 456</Text>
            <Text style={styles.summaryText}>
              A bill to amend the Federal Food, Drug, and Cosmetic Act to
              establish a program to increase the development of new drugs to
              treat pediatric cancers, and for other purposes.
            </Text>
            <Text style={styles.resultText}>Enacted Via Other Measures</Text>
          </Body>
        </Card>
        <Card style={styles.containerBill}>
          <Body>
            <Text style={styles.senatorText}>Michael Bennet: Yes</Text>
            <Text style={styles.senatorText}>Cory Gardner: No</Text>
          </Body>
        </Card>
      </ScrollView>
    );
  }
}

export default Next;

const styles = EStyleSheet.create({
  senatorText: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: 30,
    color: "$navyBlue"
  },
  containerBill: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$snowWhite",
    width: "100%",
    height: "35%"
  },
  nameText: {
    fontWeight: "600",
    fontSize: 60,
    color: "$red"
  },
  resultText: {
    fontWeight: "600",
    fontSize: 18,
    color: "$navyBlue"
  },
  summaryText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
    color: "$navyBlue",
    padding: 10
  }
});
