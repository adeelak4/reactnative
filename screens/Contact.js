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
import Menu from "./Menu";
import Icon from "../assets/trackinfo.png";
import Icon2 from "../assets/footerImages.png";

const contact = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.wraper}>
          <View style={styles.footer}>
            <Text style={styles.title}>Contact Us!</Text>
            <Text style={styles.text}>Feel free for any queries</Text>
            <Text style={styles.text_footer}>Name </Text>
            <View style={styles.action}>
              <AntDesign name="user" color="#009387" size={20} />
              <TextInput
                placeholder="your email"
                style={styles.textInput}
                autoCapitalize="none"
              />
              <Ionicons
                name="checkmark-circle-outline"
                color="#009387"
                size={20}
              />
            </View>

            <Text style={styles.text_footer}>mobile </Text>
            <View style={styles.action}>
              <AntDesign name="mobile1" color="#009387" size={20} />
              <TextInput
                placeholder="your email"
                style={styles.textInput}
                autoCapitalize="none"
              />
              <Ionicons
                name="checkmark-circle-outline"
                color="#009387"
                size={20}
              />
            </View>

            <Text style={styles.text_footer}>Email </Text>
            <View style={styles.action}>
              <AntDesign name="mail" color="#009387" size={20} />
              <TextInput
                placeholder="your email"
                style={styles.textInput}
                autoCapitalize="none"
              />
              <Ionicons
                name="checkmark-circle-outline"
                color="#009387"
                size={20}
              />
            </View>
            <Text style={styles.text_footer}>Your Text Messege </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="your email"
                style={styles.textInputs}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.button}>
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <LinearGradient
                  colors={["#08d4c4", "#01ab9d"]}
                  style={styles.signIn}
                >
                  <Text style={styles.textSign}> Submit </Text>
                  <Ionicons name="arrow-forward" color="#fff" size={20} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.footerImage}>
          <Image
            source={require("../assets/footerImages.png")}
            style={styles.footerImg}
            resizeMode="stretch"
          />
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
    flexDirection: "column",

    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  wraper: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    gap: "1rem",
    alignItems: "center",

    margin: 30,
  },
  text_footer: {
    marginTop: 10,
    color: "#05375a",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "RobotoCondensed_400Regular",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logos: {
    width: 90,
    height: 90,
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
  textInputs: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
    height: 80,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
  },
  Btn_style: {
    borderRadius: 30,
    flexDirection: "column",
    width: 370,
    height: 110,
    margin: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    zIndex: 999,
    elevation: 7,
    width: 170,
    height: 125,
    alignItems: "center",
  },
  tch_opacity: {
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "column",
    width: 160,
    backgroundColor: "white",
    height: 125,
    margin: 0,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
});
export default contact;
