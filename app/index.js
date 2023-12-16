import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn, LogoHeader, Cadavre } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: true,
          // headerLeft: () => (
          //   <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" />
          // ),
          headerRight: () => (
            <LogoHeader imagesUrl={images.logo} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Cadavre />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
