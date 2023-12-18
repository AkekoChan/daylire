import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  infosContainer: {
    gap: SIZES.medium,
    alignItems: "center",
  },
  infosTitle: {
    fontFamily: FONT.bodoniBold,
    fontSize: SIZES.xxLarge,
    textDecorationLine: "underline",
    textAlign: "center",
  },
  infosStats: {
    fontFamily: FONT.senRegular,
    textAlign: "center",
  },
  infosBold: {
    fontFamily: FONT.senBold,
    fontSize: SIZES.large,
    color: COLORS.tertiary,
  },
  separator: {
    height: 2,
    width: 120,
    backgroundColor: COLORS.gray2,
  },
});

export default styles;
