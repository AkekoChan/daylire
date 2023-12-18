import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    gap: SIZES.medium,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
    fontFamily: FONT.bodoniBold,
  },
  authorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  authorContainer: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.small - 2,
    marginBottom: SIZES.small,
  },
  authorImageContainer: {
    borderColor: COLORS.gray2,
    borderWidth: 2,
    ...SHADOWS.custom,
    borderRadius: SIZES.small / 1.25,
  },
  authorImage: {
    width: 42,
    height: 42,
    borderRadius: SIZES.small / 1.25,
  },
  authorName: {
    fontFamily: FONT.senRegular,
    color: COLORS.secondary,
    flexShrink: 1,
  },
});

export default styles;
