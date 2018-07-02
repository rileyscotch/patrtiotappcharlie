import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  picker: {
    backgroundColor: "$snowWhite",
    // bottom: 0,
    // left: 0,
    // right: 0,
    // height: 50,
    width: 150,
    borderRadius: 5,
  },
  container: {
    flex: -1,
    alignItems: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$navyBlue",
    width: "90%",
    height: "15%",
    borderRadius: 5,

  },
  selectText: {
    color: '$red',
    fontWeight: '600',
  }
});
