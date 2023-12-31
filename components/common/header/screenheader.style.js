import { StyleSheet } from "react-native";

import { COLORS, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 42,
    height: 42,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.gray2,
    borderWidth: SIZES.small / 10,
    ...SHADOWS.custom,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
