import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: SIZES.xxLarge * 3.5,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",

    marginTop: SIZES.xLarge,
    gap: SIZES.medium,
    paddingStart: SIZES.large,
    borderBottomLeftRadius: SIZES.large,
    borderBottomRightRadius: SIZES.large,
    borderBottomColor: COLORS.gray,
    ...SHADOWS.custom,
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // marginTop: SIZES.xLarge,
  },
  logoImgContainer: {
    width: SIZES.xxLarge * 2.5,
    height: SIZES.xxLarge * 2.5,
  },
  logoImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
  logoText: {
    fontFamily: FONT.bodoniBold,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    marginRight: -2,
  },
});

export default styles;
