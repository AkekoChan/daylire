import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: SIZES.xxLarge * 4,
    backgroundColor: COLORS.white,
    alignItems: "flex-end",
    paddingHorizontal: SIZES.small,
    borderBottomLeftRadius: SIZES.large,
    borderBottomRightRadius: SIZES.large,
    borderBottomColor: COLORS.gray,
    ...SHADOWS.custom,
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  logoImgContainer: {
    width: SIZES.xxLarge * 2,
    height: SIZES.xxLarge * 2,
  },
  logoImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
  logoText: {
    fontFamily: FONT.bodoniBold,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
});

export default styles;
