import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT.bodoniBold,
    fontSize: SIZES.xxLarge,
    color: COLORS.secondary,
    textAlign: "center",
    marginBottom: SIZES.large,
  },
  cardsContainer: {
    gap: SIZES.medium,
  },
});

export default styles;
