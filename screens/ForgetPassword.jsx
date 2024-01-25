import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//import Checkbox from "expo-checkbox";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the appropriate icon library
import { useNavigation } from "@react-navigation/native";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ position: "relative" }}>
      {/* {showAnimation && <ToastNotification />} */}
      <View style={styles.container}>
        <View style={{ paddingTop: 8, gap: 8, paddingHorizontal: 40 }}>
          <View style={{ alignSelf: "center", paddingTop: 40 }}>
            <Image
              style={{ height: 80, width: 80 }}
              source={require("../assets/icon.png")}
              resizeMode="cover"
            />
          </View>

          <View
            style={{ width: "110%", alignSelf: "center", paddingTop: "40%" }}
          >
            <Text style={{ fontSize: 15, color: "#030229", marginBottom: 8 }}>
              Email address
            </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="example@gmail.com"
              placeholderTextColor="#6b7280"
              style={{
                height: 50,
                borderColor: "lightgray",
                borderRadius: 5,
                paddingHorizontal: 12,
                width: "100%",
                backgroundColor: "#F7F7F8",
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            paddingHorizontal: 22,
            paddingTop: "60%",
          }}
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
                fontSize: 15, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Send Link
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 26,
            paddingTop: 16,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#605BFF", fontWeight: "200" }}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "#605BFF", fontWeight: "200" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
});
