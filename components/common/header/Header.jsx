import { Text, Image, SafeAreaView, View, StatusBar } from "react-native";

import styles from "./header.style";
import { SIZES, icons } from "../../../constants";

import ScreenHearderBtn from "../../../components/common/header/ScreenHeaderBtn";

const Header = ({ imagesUrl, dimension, backBtn, handlePress }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container(StatusBar.currentHeight)}>
        {backBtn ? (
          <ScreenHearderBtn
            iconUrl={icons.left}
            dimension={SIZES.medium}
            handlePress={handlePress}
          />
        ) : null}
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
