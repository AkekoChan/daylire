import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  headTitle: {
    fontFamily: FONT.bodoniBold,
    fontSize: SIZES.xxLarge,
    color: COLORS.secondary,
    textAlign: "center",
    marginBottom: SIZES.large,
  },
});

export default styles;
