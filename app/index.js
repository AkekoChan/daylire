import { useState, useCallback } from "react";
import { View, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import { Stack } from "expo-router";

import useFetch from "../hook/useFetch";
import { COLORS, images, SIZES } from "../constants";
import { Header, Cadavre } from "../components";
import { LikeProvider } from "../utils/likeContext";

const Home = () => {
  const { data, isLoading, error, refetch } = useFetch("cadavres", "GET");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  return (
    // <UpdateProvider>
    <LikeProvider>
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View
            style={{
              flex: 1,
              padding: SIZES.xxLarge,
            }}
          >
            <Cadavre data={data} isLoading={isLoading} error={error} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LikeProvider>
    // </UpdateProvider>
  );
};

export default Home;
