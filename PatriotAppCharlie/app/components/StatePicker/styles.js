import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  picker: {
    backgroundColor: "#fafafa",
    width: 150
  },
  container: {
    flex: 0,
    alignItems: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$snowWhite",
    width: "100%",
    height: "15%",
    borderRadius: 5,
  },
  selectText: {
    color: "$red",
    fontWeight: "600",
    fontSize: 20
  }
});
