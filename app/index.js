import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { Stack } from "expo-router";

import { COLORS, images, SIZES } from "../constants";
import { Header, Cadavre } from "../components";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: SIZES.xxLarge * 3.2,
        backgroundColor: COLORS.white,
      }}
    >
      <Stack.Screen
        options={{
          header: () => <Header imagesUrl={images.logo} dimension="100%" />,
          headerShadowVisible: false,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.xxLarge,
          }}
        >
          <Cadavre />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
