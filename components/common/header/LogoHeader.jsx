import { Text, Image, TouchableOpacity } from "react-native";

import styles from "./logoheader.style";

const LogoHeader = ({ imagesUrl, dimension }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btnText}>Daylire</Text>
      <Image
        source={imagesUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default LogoHeader;
