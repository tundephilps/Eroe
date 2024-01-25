import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Messages = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../assets/face.jpeg"),
    messageTime: "4 mins ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../assets/face2.jpg"),
    messageTime: "2 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../assets/face3.jpg"),
    messageTime: "1 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  //   {
  //     id: "4",
  //     userName: "Selina Paul",
  //     userImg: require("../assets/users/user-6.jpg"),
  //     messageTime: "1 day ago",
  //     messageText:
  //       "Hey there, this is my test for a post of my social app in React Native.",
  //   },
  //   {
  //     id: "5",
  //     userName: "Christy Alex",
  //     userImg: require("../assets/users/user-7.jpg"),
  //     messageTime: "2 days ago",
  //     messageText:
  //       "Hey there, this is my test for a post of my social app in React Native.",
  //   },
];

const MessagesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
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
          Messages
        </Text>
        <TouchableOpacity style={{ opacity: 0 }}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View>
          <FlatList
            data={Messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("Chats")}
              >
                <View style={styles.userInfo}>
                  <View style={styles.userImgWrapper}>
                    <Image style={styles.userImg} source={item.userImg} />
                  </View>
                  <View style={styles.textSection}>
                    <View style={styles.userInfo}>
                      <Text style={styles.userName}>{item.userName}</Text>
                      <Text style={styles.postTime}>{item.messageTime}</Text>
                    </View>
                    <Text style={styles.messageText}>{item.messageText}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 8,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  card: {
    width: "",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 8,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  userInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  userName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  postTime: {
    fontSize: 10,
    color: "#666",
    fontWeight: "200",
  },
  messageText: {
    fontSize: 14,
    color: "#333333",
  },
});
