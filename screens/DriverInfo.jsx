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
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import Menu from "./Menu";
import Icon from "../assets/trackinfo.png";
import Icon2 from "../assets/footerImages.png";

const DriverInfo = ({ navigation }) => {
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
          <LinearGradient
            colors={["#08d4c4", "#01ab9d"]}
            style={styles.Btn_style}
          >
            <TouchableOpacity style={styles.tch_opacity} activeOpacity={0.9}>
              <Image
                source={require("../assets/profile1.png")}
                style={styles.logos}
                resizeMode="stretch"
              />
              <View>
                <Text style={styles.title}>NOOR BHAI</Text>
                <Text style={styles.title1}>03333986721</Text>
                <Text style={styles.title1}>Route: Steel Town</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={["#08d4c4", "#01ab9d"]}
            style={styles.Btn_style}
          >
            <TouchableOpacity style={styles.tch_opacity} activeOpacity={0.9}>
              <Image
                source={require("../assets/profille2.png")}
                style={styles.logos}
                resizeMode="stretch"
              />
              <View>
                <Text style={styles.title}>RAFIQ GUJJAR</Text>
                <Text style={styles.title1}>03334566721</Text>
                <Text style={styles.title1}>Route: KORANGI</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={["#08d4c4", "#01ab9d"]}
            style={styles.Btn_style}
          >
            <TouchableOpacity style={styles.tch_opacity} activeOpacity={0.9}>
              <Image
                source={require("../assets/profille3.png")}
                style={styles.logos}
                resizeMode="stretch"
              />
              <View>
                <Text style={styles.title}>ARIF BHATTI</Text>
                <Text style={styles.title1}>0334536721</Text>
                <Text style={styles.title1}>Route: NAZIMABAD</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={["#08d4c4", "#01ab9d"]}
            style={styles.Btn_style}
          >
            <TouchableOpacity style={styles.tch_opacity} activeOpacity={0.9}>
              <Image
                source={require("../assets/profille2.png")}
                style={styles.logos}
                resizeMode="stretch"
              />
              <View>
                <Text style={styles.title}>AKBAR BROHI</Text>
                <Text style={styles.title1}>03334567775</Text>
                <Text style={styles.title1}>Route: DEFENCE</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          {/* <Text style={styles.textStyle}> mehmood bhai </Text>
          <Text> 03333538499</Text>
          <Image
            source={require("../assets/profile1.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          /> */}
        </View>
        {/* <View style={styles.footerImage}>
          <Image
            source={require("../assets/footerImages.png")}
            style={styles.footerImg}
            resizeMode="stretch"
          />
        </View> */}
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
    paddingVertical: "5%",
  },
  wraper: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    margin: 4,
    gap: "1rem",
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
    width: 100,
    height: 100,
  },
  logos: {
    width: 100,
    height: 100,
  },
  textStyle: {
    fontSize: 20,
    padding: 30,

    margin: 20,
    color: "white",
  },
  listStyle: {
    flexDirection: "column",
    textAlign: "center",
    margin: 20,
    padding: 10,
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
    borderRadius: 30,
    flexDirection: "column",
    width: 320,
    height: 100,
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  tch_opacity: {
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "row",
    width: 310,
    backgroundColor: "white",
    height: 100,
    margin: 0,
    justifyContent: "center",
  },
});
export default DriverInfo;
