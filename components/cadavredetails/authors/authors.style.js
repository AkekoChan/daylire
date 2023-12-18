import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    gap: SIZES.medium,
    alignItems: "center",
  },
  title: {
    width: "100%",
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
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.gray2,
    borderWidth: SIZES.small / 10,
    ...SHADOWS.custom,
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
  separator: {
    height: 2,
    width: 120,
    backgroundColor: COLORS.gray2,
  },
});

export default styles;
