import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../../components/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../../components/Post";
import Header from "../../components/Header";

const Homepage = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eeeeee", flex: 1 }}>
      <Header />
      <ScrollView style={{ padding: 12 }}>
        <Post />

        <View style={{ padding: 54 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
