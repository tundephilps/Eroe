import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{ alignSelf: "center", fontSize: 33, fontWeight: "700" }}>
          Welcome New User
        </Text>
        <Text style={{ alignSelf: "center", fontWeight: "500", color: "gray" }}>
          Upload your profile Image
        </Text>
        <View style={{ height: 40 }} />
        <TouchableOpacity style={{ alignSelf: "center" }}>
          <Image
            style={{ height: 90, width: 90 }}
            source={require("../assets/avatar.png")}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View style={{ height: 40 }} />

        <TouchableOpacity
          style={{
            paddingHorizontal: 22,
          }}
          onPress={() => navigation.navigate("MyTabs")}
        >
          <View
            style={{
              backgroundColor: "#A10F7E", // Background color
              marginTop: 6, // Margin top
              height: 50,
              paddingHorizontal: 18,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});
