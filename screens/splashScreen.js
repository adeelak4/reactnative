import React from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import useSocket from "./../hooks/useSocket";
import useBus from "../hooks/useBus";

const SplashScreen = ({ navigation }) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  let {} = useBus();
  let {} = useSocket();

  return (
    <View style={styles.container}>
      <Animated.View style={styles.header}>
        <Image source={require("../assets/bus.png")} style={styles.logo} resizeMode="stretch" />
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.title}>Stay connected with everyone!</Text>
        <Text style={styles.text}>Sign in with account</Text>

        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
              <Text style={styles.textSign}>Get Started </Text>
              <Ionicons name="arrow-forward" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: 300,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
