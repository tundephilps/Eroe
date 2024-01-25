import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreatePostScreen = () => {
  const [postText, setPostText] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const handlePost = () => {
    // Handle post submission logic
    console.log("Post submitted:", postText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ opacity: 0 }}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Post</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
          value={postText}
          onChangeText={(text) => setPostText(text)}
        />
        <Image
          source={{ uri: "https://placekitten.com/200/200" }} // Sample image URI
          style={styles.imagePreview}
        />
        {/* Add image upload button or camera icon here */}
      </View>
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    zIndex: 99,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    height: "70%",
    padding: 16,
  },
  input: {
    fontSize: 16,
    marginBottom: 16,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  postButton: {
    backgroundColor: "#A10F7E",
    padding: 16,
    alignItems: "center",
  },
  postButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CreatePostScreen;
