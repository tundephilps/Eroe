import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");

  const [location, setLocation] = useState("");

  const navigation = useNavigation();

  const handleDonePress = () => {
    // Replace the following with actual backend endpoint and upload logic
    const backendEndpoint = "";

    // Prepare data for upload
    const userData = {
      username: username,
      location: location,
      bio: bio,
    };

    // Perform the upload to the backend
    fetch(backendEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response from the backend
        console.log("Data uploaded successfully:", data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error uploading data:", error);
      });
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          padding: 12,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 22,
            alignSelf: "center",
          }}
        >
          Edit Profile
        </Text>
        <TouchableOpacity style={{ opacity: 0 }}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ position: "relative" }}>
        <Image
          style={{
            height: 100,
            width: 100,
            borderRadius: 99,
            alignSelf: "center",
          }}
          source={require("../assets/face3.jpg")}
          resizeMode="contain"
        />
        <View
          style={{
            backgroundColor: "white",
            position: "absolute",
            bottom: "16%",
            right: "36%",
            padding: 3,
            borderRadius: 50,
          }}
        >
          <View
            style={{
              padding: 8,
              borderRadius: 50,
              backgroundColor: "#A10F7E",
            }}
          >
            <AntDesign name="edit" size={16} color="white" />
          </View>
        </View>

        <Text
          style={{
            color: "#A10F7E",
            alignSelf: "center",
            paddingTop: 14,
            fontWeight: "700",
          }}
        >
          Edit Photo
        </Text>
      </TouchableOpacity>

      <View style={{ paddingHorizontal: 18, gap: 12 }}>
        <View>
          <Text style={{ fontSize: 16, color: "#030229", marginBottom: 8 }}>
            Username
          </Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            value={username}
            onChangeText={(text) => setUserName(text)}
            placeholder="John Doe"
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
        <View>
          <Text style={{ fontSize: 16, color: "#030229", marginBottom: 8 }}>
            Bio
          </Text>
          <TextInput
            style={styles.textArea}
            placeholder="About Yourself"
            multiline={true}
            numberOfLines={10}
            onChangeText={(text) => setBio(text)}
          />
        </View>
        <View>
          <Text style={{ fontSize: 16, color: "#030229", marginBottom: 8 }}>
            Location
          </Text>
          <TextInput
            placeholder="Lagos,Nigeria"
            onChangeText={(text) => setLocation(text)}
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

      <View style={{ padding: "10%" }} />
      <TouchableOpacity
        style={{
          paddingHorizontal: 16,
        }}
        //  onPress={handleDonePress}
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
            Done
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  textArea: {
    height: 100,
    borderWidth: 1,
    marginBottom: 16,

    borderColor: "lightgray",
    borderRadius: 5,
    paddingHorizontal: 12,
    width: "100%",
    backgroundColor: "#F7F7F8",
  },
});
