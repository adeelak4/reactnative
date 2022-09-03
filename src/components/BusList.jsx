import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BusList(props) {
  return (
    <View>
      <Text style={styles.touchText}> {props.Text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  touchText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
