import React from "react";
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Icon, Layout, Spinner } from "@ui-kitten/components";

const ArrowRight = (props) => <Icon {...props} name="arrow-forward-outline" />;
const ArrowLeft = (props) => <Icon {...props} name="arrow-back-outline" />;

const Home = ({ navigation }) => {
  const [page, setPage] = React.useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/icon.png")} style={styles.logo} resizeMode="stretch" />
      </View>

      <View style={styles.footer}>
        <View style={styles.wraper}>
          {page === 1 && <Page1 navigation={navigation} />}
          {page === 2 && <Page2 navigation={navigation} />}
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <Button
            style={styles.button}
            appearance="ghost"
            status="info"
            accessoryLeft={ArrowLeft}
            onPress={() => setPage(1)}
          />
          <Button
            style={styles.button}
            appearance="ghost"
            status="info"
            accessoryLeft={ArrowRight}
            onPress={() => setPage(2)}
          />
        </View>
        <View style={styles.footerImage}>
          <Image source={require("../assets/footerImages.png")} style={styles.footerImg} resizeMode="stretch" />
        </View>
      </View>
    </View>
  );
};

function Page1({ navigation }) {
  return (
    <>
      {/* Bus Tracking */}
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
      {/* Bus Schedule */}
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
      {/* Driver Info */}
      <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.Btn_style}>
        <TouchableOpacity
          style={styles.tch_opacity}
          activeOpacity={0.9}
          onPress={() => navigation.navigate("driverInfo")}
        >
          <Image source={require("../assets/driver_info.png")} style={styles.logos} resizeMode="stretch" />
          <Text style={styles.title}>DRIVER INFO</Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* Near by */}
      <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.Btn_style}>
        <TouchableOpacity style={styles.tch_opacity} activeOpacity={0.9} onPress={() => navigation.navigate("nearBy")}>
          <Image source={require("../assets/far_from_me.png")} style={styles.logos} resizeMode="stretch" />
          <Text style={styles.title}>NEAR BY</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}
function Page2({ navigation }) {
  return (
    <>
      {/* Fares */}
      <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.Btn_style}>
        <TouchableOpacity style={styles.tch_opacity} activeOpacity={0.9} onPress={() => navigation.navigate("fares")}>
          <Image source={require("../assets/driver_info.png")} style={styles.logos} resizeMode="stretch" />
          <Text style={styles.title}>FARES</Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* Contact us */}
      <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.Btn_style}>
        <TouchableOpacity style={styles.tch_opacity} activeOpacity={0.9} onPress={() => navigation.navigate("contact")}>
          <Image source={require("../assets/contact_us.png")} style={styles.logos} resizeMode="stretch" />
          <Text style={styles.title}>CONTACT US</Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* About */}
      <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.Btn_style}>
        <TouchableOpacity style={styles.tch_opacity} activeOpacity={0.9} onPress={() => navigation.navigate("about")}>
          <Image source={require("../assets/trackinfo.png")} style={styles.logos} resizeMode="stretch" />
          <Text style={styles.title}>ABOUT</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}

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
    flexDirection: "row",
    // flex: 2,
    flexWrap: "wrap",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    zIndex: 1,
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
    marginBottom: 0,
    // flex: 1,
  },
  footerImg: {
    width: 180,
    height: 130,
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
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    zIndex: 999,
    elevation: 7,
    width: 165,
    height: 120,
    alignItems: "center",
  },
  tch_opacity: {
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "column",
    width: 155,
    backgroundColor: "white",
    height: 120,
  },
});

export default Home;
