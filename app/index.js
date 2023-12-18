import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn, Header, Cadavre } from "../components";

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: 128, backgroundColor: COLORS.white }}
    >
      <Stack.Screen
        options={{
          header: () => <Header imagesUrl={images.logo} dimension="100%" />,
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
