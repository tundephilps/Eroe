import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import YourFriends from "./YourFriends";
import FriendRequest from "./FriendRequest";
import Suggestions from "./Suggestions";

// Sample components for each tab

const TabScreen = () => {
  const [activeTab, setActiveTab] = useState("yourFriends");

  const renderTabContent = () => {
    switch (activeTab) {
      case "yourFriends":
        return (
          <View>
            <YourFriends />
          </View>
        );
      case "requests":
        return (
          <View>
            <FriendRequest />
          </View>
        );
      case "suggestions":
        return (
          <View>
            <Suggestions />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "yourFriends" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("yourFriends")}
        >
          <Text
            style={[
              styles.activeText,
              activeTab !== "yourFriends" && styles.words,
            ]}
          >
            Your Friends
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "requests" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("requests")}
        >
          <Text
            style={[
              styles.activeText,
              activeTab !== "requests" && styles.words,
            ]}
          >
            Requests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "suggestions" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("suggestions")}
        >
          <Text
            style={[
              styles.activeText,
              activeTab !== "suggestions" && styles.words,
            ]}
          >
            Suggestions
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ paddingVertical: 12 }}>
        {renderTabContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#eee",
    paddingVertical: 4,
    borderRadius: 16,
  },
  tabButton: {
    padding: 10,
    borderRadius: 12,
    color: "white",
  },
  activeTab: {
    backgroundColor: "#A10F7E",
    paddingHorizontal: 12,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  words: {
    color: "black",
    fontWeight: "300",
  },
  activeText: {
    color: "white",
    fontWeight: "300",
  },
});

export default TabScreen;
