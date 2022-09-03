import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Test from "./src/components/LogIn";
import { useFonts } from "expo-font";

import * as AppSplashScreen from "expo-splash-screen";
import SplashScreen from "./screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import DriverInfo from "./screens/DriverInfo";
import About from "./screens/About";
// import Menu from "./screens/Menu";
import SearchTrackingBus from "./screens/SearchTrackingBus";
import SearchSchedule from "./screens/SearchSchedule";
import TrackLocation from "./screens/TrackLocation";
import BusSchedule from "./screens/BusSchedule";
import { RecoilRoot } from "recoil";
import Contact from "./screens/Contact";

const Stack = createNativeStackNavigator();

import {
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
} from "@expo-google-fonts/roboto-condensed";
import React from "react";

export default function App() {
  let [fontsLoad] = useFonts({
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
  });

  React.useEffect(() => {
    const fn = async () => {
      await AppSplashScreen.preventAutoHideAsync();
    };
    fn();
  }, []);

  React.useEffect(() => {
    const fn = async () => {
      await AppSplashScreen.hideAsync();
    };
    if (fontsLoad) {
      fn();
    }
  }, [fontsLoad]);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerTitle: "WELCOME", headerTitleAlign: "center" }}
          />
          {/* <Stack.Screen
            name="login"
            component={Test}
            options={{ headerTitle: "LOG IN", headerTitleAlign: "center" }}
          /> */}
          <Stack.Screen name="home" component={Home} options={{ headerTitle: "HOME", headerTitleAlign: "center" }} />
          <Stack.Screen
            name="contact"
            component={Contact}
            options={{ headerTitle: "CONTACT US", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="driverInfo"
            component={DriverInfo}
            options={{ headerTitle: "DRIVER INFO", headerTitleAlign: "center" }}
          />
          {/* <Stack.Screen
            name="menu"
            component={Menu}
            options={{ headerTitle: "Meuu", headerTitleAlign: "center" }}
          /> */}

          <Stack.Screen
            name="searchTrackingBus"
            component={SearchTrackingBus}
            options={{ headerTitle: "BUS LIST", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="about"
            component={About}
            options={{ headerTitle: "ABOUT US", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="searchSchedule"
            component={SearchSchedule}
            options={{ headerTitle: "BUS LIST", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="trackLocation"
            component={TrackLocation}
            options={{
              headerTitle: "TRACK LOCATION",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="busSchedule"
            component={BusSchedule}
            options={{
              headerTitle: "BUS SCHEDULE",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
    // <View >``
    //  <Test />
    // <SplashScreen />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
