import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: SIZES.xxLarge * 2,
    height: SIZES.xxLarge * 2,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.medium,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
  btnText: {
    fontFamily: FONT.bodoniBold,
    fontSize: SIZES.medium,
  },
});

export default styles;
