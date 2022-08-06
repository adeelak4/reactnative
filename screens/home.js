import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/bus.png")} style={styles.logo} resizeMode="stretch" />
      </View>

      <View style={styles.footer}>
        <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.Btn_style}>
          <TouchableOpacity
            style={styles.tch_opacity}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("searchTrackingBus")}
          >
            <Image source={require("../assets/tracking.png")} style={styles.logos} resizeMode="stretch" />
            <Text style={styles.title}>BUS TRACKING</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.Btn_style}>
          <TouchableOpacity
            style={styles.tch_opacity}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("searchSchedule")}
          >
            <Image source={require("../assets/trackinfo.png")} style={styles.logos} resizeMode="stretch" />
            <Text style={styles.title}>BUS SCHEDULE</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.footerImage}>
          <Image source={require("../assets/footerImages.png")} style={styles.footerImg} resizeMode="stretch" />
        </View>
      </View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: "10%",

    alignItems: "center",
  },
  text_footer: {
    marginTop: 10,
    color: "#05375a",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "RobotoCondensed_400Regular",
  },
  logo: {
    width: 150,
    height: 100,
  },
  logos: {
    width: 110,
    height: 110,
  },
  footerImage: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerImg: {
    width: 240,
    height: 190,
  },

  title: {
    color: "#05375a",
    fontSize: 20,
    fontWeight: "300",
  },
  text: {
    color: "grey",
    marginTop: 5,
    paddingBottom: 20,
  },

  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  Btn_style: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "column",
    width: 230,
    height: 130,
    marginTop: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    zIndex: 999,
    elevation: 7,
  },
  tch_opacity: {
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "column",
    width: 220,
    backgroundColor: "white",
    height: 135,
  },
});

export default Home;
