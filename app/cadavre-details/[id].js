import { Stack, useRouter, useGlobalSearchParams } from "expo-router";

import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { SIZES, COLORS, images } from "../../constants";
import { Authors, Contributions, Infos, Like, Header } from "../../components";

import useFetch from "../../hook/useFetch";

const CadavreDetails = () => {
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
          header: () => (
            <Header imagesUrl={images.logo} dimension="100%" backBtn={true} handlePress={} />
          ),
          headerShadowVisible: false,
        }}
      />
    </SafeAreaView>
  );
};

export default CadavreDetails;
