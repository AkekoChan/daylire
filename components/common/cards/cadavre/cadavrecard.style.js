import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: SIZES.small,
    ...SHADOWS.custom,
  },
  heartContainer: {
    position: "absolute",
    top: "43%",
    padding: SIZES.medium,
    backgroundColor: COLORS.white,
    right: SIZES.large,
    borderRadius: 50,
    borderColor: COLORS.secondary,
    borderWidth: 6,
    zIndex: 1,
  },
  textContainer: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.xLarge,
    gap: SIZES.small / 2,
    borderBottomLeftRadius: SIZES.small,
    borderBottomRightRadius: SIZES.small,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONT.bodoniBold,
    fontSize: SIZES.large,
  },
  description: {
    color: COLORS.white,
    fontFamily: FONT.senRegular,
  },
});

export default styles;
