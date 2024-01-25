import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const FriendRequest = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          alignSelf: "center",
          marginTop: 8,
        }}
      >
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <Image
            style={{ height: 50, width: 50, borderRadius: 99 }}
            source={require("../assets/face3.jpg")}
            resizeMode="cover"
          />
          <View>
            <Text style={{ fontWeight: "300", fontSize: 20 }}>
              Adekanye Felix
            </Text>
            <Text style={{ color: "gray", fontWeight: "200" }}>
              Lagos, Nigeria
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity
            style={{ backgroundColor: "#A10F7E", padding: 6, borderRadius: 8 }}
          >
            <Entypo name="add-user" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "#A10F7E", padding: 6, borderRadius: 8 }}
          >
            <MaterialIcons name="delete-sweep" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          alignSelf: "center",
          marginTop: 8,
        }}
      >
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <Image
            style={{ height: 50, width: 50, borderRadius: 99 }}
            source={require("../assets/face2.jpg")}
            resizeMode="cover"
          />
          <View>
            <Text style={{ fontWeight: "300", fontSize: 20 }}>Lara Croft</Text>
            <Text style={{ color: "gray", fontWeight: "200" }}>
              Ibadan, Nigeria
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <TouchableOpacity
            style={{ backgroundColor: "#A10F7E", padding: 6, borderRadius: 8 }}
          >
            <Entypo name="add-user" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "#A10F7E", padding: 6, borderRadius: 8 }}
          >
            <MaterialIcons name="delete-sweep" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FriendRequest;

const styles = StyleSheet.create({});
