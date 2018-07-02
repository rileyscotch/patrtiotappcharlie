import EStyleSheet from "react-native-extended-stylesheet";

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$snowWhite",
    width: "90%",
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    marginVertical: 11,
    
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
    color: "$navyBlue"
  },
  border: {}
});
