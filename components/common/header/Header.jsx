import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";

import styles from "./header.style";
import { COLORS } from "../../../constants";

const Header = ({ imagesUrl, dimension }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Daylire</Text>
          <View style={styles.logoImgContainer}>
            <Image
              source={imagesUrl}
              resizeMode="cover"
              style={styles.logoImg(dimension)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
