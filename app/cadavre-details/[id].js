import { Stack, useRouter, useGlobalSearchParams } from "expo-router";

import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { SIZES, COLORS, images } from "../../constants";
import { Authors, Contributions, Infos, Like, Header } from "../../components";

import useFetch from "../../hook/useFetch";

const CadavreDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const { data, isLoading, error } = useFetch(`cadavre/${params.id}`, "GET");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: SIZES.xxLarge * 4,
        backgroundColor: COLORS.white,
      }}
    >
      <Stack.Screen
        options={{
          header: () => (
            <Header
              imagesUrl={images.logo}
              dimension="100%"
              backBtn={true}
              handlePress={() => router.back()}
            />
          ),
          headerShadowVisible: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.xxLarge, gap: SIZES.medium }}>
          <Infos data={data} />

          <View style={{ gap: SIZES.medium }}>
            {isLoading ? (
              <ActivityIndicator size="large" color={COLORS.primary} />
            ) : error ? (
              <Text>Il y a une erreur !</Text>
            ) : (
              data.contributions?.map((contribution, index) => (
                <Contributions contribution={contribution} key={index} />
              ))
            )}
          </View>
          <Authors authors={data.contributeurs} />
          <Like />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CadavreDetails;
