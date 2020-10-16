import { StyleSheet, PixelRatio } from "react-native";
import { Colors, Fonts } from "../../styles";
const lowEnd = PixelRatio.get() <= 1.5;

export default StyleSheet.create({
  currentStep: {
    borderColor: Colors.primary,
    borderWidth: 1
  },
  doneStep: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary
  },
  todoStep: {
    borderColor: "#A9A9A9"
  },
  stepText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: 12
  },
  currentStepText: {
    ...this.stepText,
    color: Colors.primary
  },
  doneStepText: {
    ...this.stepText,
    color: Colors.light
  },
  todoStepText: {
    ...this.stepText,
    color: "#A9A9A9"
  },
  stepNav: {
    borderWidth: 1,
    borderRadius: 4,
    width: lowEnd ? 125 : 155,
    height: 35,
    // paddingLeft: 10,
    // paddingRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  stepSep: {
    borderWidth: 1,
    flex: 1,
    width: 10
  },
  navBtn: {
    flex: 1,
    height: 60,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    elevation: 0
  },
  mainButtonText: {
    fontFamily: Fonts.fontFamily.regular,
    fontSize: 20
  }
});
