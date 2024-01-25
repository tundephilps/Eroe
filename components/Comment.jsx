import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Comment = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 12,
        }}
      >
        <Image
          style={{ height: 30, width: 30, borderRadius: 99 }}
          source={require("../assets/face.jpeg")}
          resizeMode="contain"
        />
        <TextInput placeholder="write a comment" style={{ width: "70%" }} />
        <TouchableOpacity
          style={{
            borderRadius: 6,
            paddingVertical: 6,
            paddingHorizontal: 12,
            backgroundColor: "#A10F7E",
          }}
        >
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 18,
        }}
      >
        <Image
          style={{ height: 30, width: 30, borderRadius: 99 }}
          source={require("../assets/face.jpeg")}
          resizeMode="contain"
        />
        <View style={{ marginLeft: 5, width: "60%" }}>
          <Text style={{ fontWeight: "600" }}>Micheal Jackson</Text>
          <Text>
            This comment is going to be extrmrely long bcos it has some issues
            with css and i dont know how to ssolve them at all
          </Text>
        </View>
        <Text style={{ fontSize: 10, fontWeight: "200" }}>1 hour ago</Text>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({});
