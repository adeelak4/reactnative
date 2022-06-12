import React from "react";
import {StyleSheet,Text,View} from "react-native";
const wellcomeNote  = ()=>{
  return(
    <View>
      <Text>Welcome To</Text>
      <Text>KUPOINT</Text>
      <StatusBar style="auto" />

    </View>
  );
}
const styles = StyleSheet.create({
  la: {
      
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color:"red",
      
  },

});

export default wellcomeNote;