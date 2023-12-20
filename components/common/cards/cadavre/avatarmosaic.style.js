import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  mosaicContainer: {
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: 180,
    borderTopLeftRadius: SIZES.small,
    borderTopRightRadius: SIZES.small,
    overflow: "hidden",
  },
  avatar: {
    position: "absolute",
    width: SIZES.xLarge * 2,
    height: SIZES.xLarge * 2,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.small / 1.25,
    borderColor: COLORS.gray2,
    borderWidth: SIZES.small / 10,
  },
});

export default styles;
