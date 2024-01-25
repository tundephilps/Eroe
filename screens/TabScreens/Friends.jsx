import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TabScreen from "../../components/Tabs2";

const Friends = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, padding: 12 }}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 22,
          alignSelf: "center",
          paddingBottom: 12,
        }}
      >
        Friends
      </Text>
      <TabScreen />
    </SafeAreaView>
  );
};

export default Friends;

const styles = StyleSheet.create({});
