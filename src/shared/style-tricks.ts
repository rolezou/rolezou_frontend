import { StyleProp, ViewStyle } from "react-native";

export const triangleTrick: {
  triangle: StyleProp<ViewStyle>;
  arrowUp: StyleProp<ViewStyle>;
  arrowDown: StyleProp<ViewStyle>;
} = {
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "#7259ce",
    borderStyle: "solid",
  },
  arrowUp: {
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: "#7259ce",
    borderRightColor: "#7259ce",
    borderBottomColor: "white",
    borderLeftColor: "#7259ce",
  },
  arrowDown: {
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    borderTopColor: "white",
    borderRightColor: "#7259ce",
    borderBottomColor: "#7259ce",
    borderLeftColor: "#7259ce",
  },
};
