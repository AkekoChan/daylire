import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    SenBold: require("../assets/fonts/Sen-Bold.ttf"),
    SenRegular: require("../assets/fonts/Sen-Regular.ttf"),
    BodoniModaBold: require("../assets/fonts/BodoniModa_18pt-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
