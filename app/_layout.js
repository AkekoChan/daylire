import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    SenBold: require("../assets/fonts/Sen-Bold.ttf"),
    SenRegular: require("../assets/fonts/Sen-Regular.ttf"),
    BodoniModaBold: require("../assets/fonts/Bodoni-Moda-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
};

export default Layout;
