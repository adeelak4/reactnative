import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test from './src/components/LogIn';
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading";
import SplashScreen from './screens/splashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './screens/home';
import login from './screens/login';
import searchTrackingBus from './screens/searchTrackingBus';
import searchSchedule from './screens/searchSchedule';
import trackLocation from './screens/trackLocation';
import busSchedule from './screens/busSchedule';





const Stack = createNativeStackNavigator();

import {
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
} from '@expo-google-fonts/roboto-condensed';


export default function App() {
  let [fontsLoad] = useFonts({
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
  });
  if (!fontsLoad) {
    return <AppLoading />
  }



  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerTitle: "WELCOME", headerTitleAlign: "center" }} />
        <Stack.Screen name="home" component={home} options={{ headerTitle: "HOME", headerTitleAlign: "center" }}  />
        <Stack.Screen name="login" component={login} options={{ headerTitle: "LOG IN", headerTitleAlign: "center" }}  />
        <Stack.Screen name="searchTrackingBus" component={searchTrackingBus} options={{ headerTitle: "BUS LIST", headerTitleAlign: "center" }}  />
        <Stack.Screen name="searchSchedule" component={searchSchedule} options={{ headerTitle: "BUS LIST", headerTitleAlign: "center" }}  />
        <Stack.Screen name="trackLocation" component={trackLocation} options={{ headerTitle: "TRACK LOCATION", headerTitleAlign: "center" }} />
        <Stack.Screen name="busSchedule" component={busSchedule} options={{ headerTitle: "BUS SCHEDULE", headerTitleAlign: "center" }}  />
      </Stack.Navigator>
    </NavigationContainer>
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
