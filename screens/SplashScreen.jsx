import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={{ height: 160, width: "100%" }}
        source={require("../assets/eroe.png")}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
