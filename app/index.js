import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          headerShadowVisible: true,
        }}
      />

      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
