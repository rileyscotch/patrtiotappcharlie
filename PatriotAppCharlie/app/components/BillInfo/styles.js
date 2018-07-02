import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  containerBill: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$snowWhite",
    width: "100%",
    height: "55%",
    borderRadius: 5,
    borderTopWidth: 5,
    borderBottomWidth: 2.5,
    borderColor: "#000000"
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
