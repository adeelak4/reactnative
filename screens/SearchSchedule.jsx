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
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import BusList from "../src/components/BusList";
import Ionicon from "@expo/vector-icons/Feather";
import useBus from "../hooks/useBus";
import * as Random from "expo-random";

const SearchSchedule = ({ navigation }) => {
  const { busses, selectBus } = useBus();
  const handleBusClick = (id) => {
    navigation.navigate("busSchedule", {
      busId: id,
    });
  };

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
        <Text style={styles.sectionTitle}>Select Your Bus</Text>

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.item}>
            {busses.map((item, i) => (
              <TouchableOpacity
                key={Random.getRandomBytes(2).join("")}
                style={styles.touchBox}
                onPress={() => {
                  handleBusClick(item._id);
                }}
              >
                <Ionicon name="map-pin" color="#009387" size={20} />
                <Text style={styles.touchText}>
                  <BusList Text={item.name} />
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
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
    width: 100,
    height: 100,
  },
  logos: {
    width: 130,
    height: 130,
  },
  footerImage: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 0,
  },
  footerImg: {
    width: 130,
    height: 90,
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

  taskWrapper: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    width: 300,
    marginTop: "3%",
  },
  touchBox: {
    margin: "2%",
    padding: "5%",
    borderBottomColor: "#009387",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 1,
    width: "100%",
    backgroundColor: "#fff",
    elevation: 7,
    flexDirection: "row",
    height: 50,
  },
  touchText: {},
  Btn_text: {
    fontSize: 20,
    fontWeight: "300",
  },
  contentContainer: {
    padding: 10,
  },
});

export default SearchSchedule;
