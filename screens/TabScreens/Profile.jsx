import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import Post from "../../components/Post";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
      <ScrollView>
        <View>
          <Image
            style={{ height: 120, width: "100%" }}
            source={require("../../assets/travel.jpg")}
            resizeMode="cover"
          />
          <View
            style={{
              backgroundColor: "white",
              position: "absolute",
              height: 120,
              width: 120,
              borderRadius: 99,
              alignItems: "center",
              justifyContent: "center",
              bottom: "-50%",
              right: "36%",
              zIndex: 99,
            }}
          >
            <Image
              style={{
                height: 110,
                width: 110,
                zIndex: 99,
                borderRadius: 99,
                alignSelf: "center",
              }}
              source={require("../../assets/face.jpeg")}
              resizeMode="cover"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 12,
          }}
        >
          <TouchableOpacity
            style={{ padding: 6, backgroundColor: "#A10F7E", borderRadius: 8 }}
          >
            <Text style={{ color: "white", fontWeight: "300" }}>
              Add Friend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              padding: 6,
              backgroundColor: "#A10F7E",
              borderRadius: 8,
              paddingHorizontal: 12,
            }}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={{ color: "white", fontWeight: "300" }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 25,
            backgroundColor: "white",
            zIndex: 10,
            paddingBottom: 12,
          }}
        >
          <Text
            style={{ alignSelf: "center", fontWeight: "700", fontSize: 28 }}
          >
            Micheal Jackson
          </Text>
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "300",
              color: "gray",
              textAlign: "center",
            }}
          >
            A Dancer and Musical Artiste that knwos all about entertainment
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              paddingTop: 12,
            }}
          >
            <Entypo name="location-pin" size={24} color="#A10F7E" />
            <Text style={{ fontWeight: "300", fontSize: 16 }}>
              Lagos, Nigeria
            </Text>
          </View>
        </View>
        <Post />

        <Post />
        <View style={{ padding: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
