import { StyleSheet, View, Image } from "react-native";
import React from "react";

const Body = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/icon.png")} style={styles.logo} resizeMode="stretch" />
      </View>

      <View style={styles.footer}>
        <View style={styles.wraper}>{children}</View>
        <View style={styles.footerImage}>
          <Image source={require("../../assets/footerImages.png")} style={styles.footerImg} resizeMode="stretch" />
        </View>
      </View>
    </View>
  );
};

export default Body;

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
    margin: 4,
    zIndex: 1,
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
  logo: {
    width: 100,
    height: 100,
  },
  logos: {
    width: 90,
    height: 90,
  },
});
