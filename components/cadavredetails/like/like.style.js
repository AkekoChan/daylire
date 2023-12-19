import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  likeBtn: {
    position: "absolute",
    right: SIZES.xxLarge,
    bottom: SIZES.xxLarge,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.xLarge,
    borderWidth: 2,
    borderColor: COLORS.gray,
    borderRadius: SIZES.large,
    ...SHADOWS.custom,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.xSmall - 4,
  },
  likedBtn: {
    borderColor: COLORS.tertiary,
  },
  likedIcon: {
    tintColor: COLORS.tertiary,
  },
  likedText: {
    color: COLORS.tertiary,
  },
  likeIcon: {
    width: SIZES.xLarge,
    height: SIZES.xLarge,
    tintColor: COLORS.gray,
  },
  likeText: {
    fontFamily: FONT.senBold,
    fontSize: SIZES.large,
    color: COLORS.gray,
  },
  active: {},
});

export default styles;
