import React, { useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";

import { COLORS, images, SIZES } from "../constants";
import { Header, Cadavre } from "../components";
import { LikeProvider } from "../utils/likeContext";

import { UpdateProvider, useUpdateContext } from "../utils/updateContext";

const Home = () => {
  const { forceUpdate } = useUpdateContext();

  useEffect(() => {
    // Forcez la mise à jour lors de l'initialisation
    forceUpdate();
  }, []);

  return (
    <LikeProvider>
      <UpdateProvider>
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: SIZES.xxLarge * 4,
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
      </UpdateProvider>
    </LikeProvider>
  );
};

export default Home;
