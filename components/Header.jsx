import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 12,
        paddingVertical: 6,
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 40, width: 80 }}
        source={require("../assets/eroe.png")}
        resizeMode="cover"
      />

      <TouchableOpacity onPress={() => navigation.navigate("Message")}>
        <Image
          style={{ height: 30, width: 30 }}
          source={require("../assets/message.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
