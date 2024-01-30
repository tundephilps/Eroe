import React, { useState } from "react";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import AppNavigation from "./navigation";
import SplashScreen from "./screens/SplashScreen";

export default function App() {
  return (
    <>
      <AppNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
