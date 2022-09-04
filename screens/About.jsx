import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/icon.png")} style={styles.logo} resizeMode="stretch" />
      </View>

      <View style={styles.footer}>
        <View style={styles.wraper}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>About this app</Text>
          <Text style={{ marginTop: 10, color: "rgba(0,0,0,0.5)" }}>
            This application tracks the real-time location of the bus through a hardware electronic device with the
            server installed in it which makes the user find their respective bus location and the distance between them
            to make sure that your required bus is registered in the list of this app also this app takes permission for
            the location which user have to allow for efficient usage of this app you can track more than one bus
            whichever you want according to your routes. We won't use the location for any other purpose, this app will
            not require any personal detail because the use of this app is completely free for students. User can see
            their bus schedule and the places where their bus will stop for a while to take students It can also be used
            for many purposes like tracking stolen phones, monitoring a transport company fleet, coordinating with
            family members, and so on.Feel free to give your valuable feedback on the contact us page as well For
            business inquiries Email at: sk903728@gmail.com Team: Saqlain Riaz Saddam Khan Adeel Afzal Usman Qureshi
            Project
          </Text>
          <Text style={{ fontSize: 16 }}>Instructor: Prof: Dr. Asim Ali</Text>
        </View>
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

export default About;
