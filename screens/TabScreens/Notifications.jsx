import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Entypo } from "@expo/vector-icons";

const Notifications = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ padding: 12 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 22,
            alignSelf: "center",
            paddingBottom: 12,
          }}
        >
          Notifications
        </Text>
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
              source={require("../../assets/face3.jpg")}
              resizeMode="cover"
            />
            <View>
              <Text style={{ fontWeight: "300", fontSize: 20 }}>
                Adekanye Felix
              </Text>
              <Text style={{ color: "gray", fontWeight: "200" }}>
                Liked your Post{"  "}
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require("../../assets/like.png")}
                  resizeMode="contain"
                />
              </Text>
            </View>
          </View>
          <View>
            <Entypo name="dots-three-horizontal" size={18} color="black" />
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
              source={require("../../assets/face2.jpg")}
              resizeMode="cover"
            />
            <View>
              <Text style={{ fontWeight: "300", fontSize: 20 }}>
                Lara Croft
              </Text>
              <Text style={{ color: "gray", fontWeight: "200" }}>
                Commented on your post{"  "}
                <Image
                  style={{ height: 18, width: 18 }}
                  source={require("../../assets/comment.png")}
                  resizeMode="contain"
                />
              </Text>
            </View>
          </View>
          <View>
            <Entypo name="dots-three-horizontal" size={18} color="black" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
