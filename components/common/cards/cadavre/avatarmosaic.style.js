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
  },
  avatar: {
    width: SIZES.xLarge * 2,
    height: SIZES.xLarge * 2,
  },
});

export default styles;
