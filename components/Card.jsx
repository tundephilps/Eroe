import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Linking } from "react-native";
//import { FaHeart, FaComment, FaShare, FaRegHeart } from "react-icons/fa";
//import Comments from "your-comments-component-path";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import travel from "../assets/travel.jpg";
import face from "../assets/face.jpeg";

const Card = () => {
  const [liked, setLiked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <View style={styles.post}>
      <View style={styles.container}>
        <View style={styles.user}>
          <View style={styles.userInfo}>
            <Image source={face} style={styles.profilePic} />
            <View style={styles.details}>
              <TouchableOpacity
                // onPress={() => Linking.openURL(`/profile/${post.userId}`)}
                style={{ textDecorationLine: "none", color: "inherit" }}
              >
                <Text style={styles.name}>Bukola saraki</Text>
              </TouchableOpacity>
              <Text style={styles.date}>1 min ago</Text>
            </View>
          </View>
          <AntDesign name="hearto" size={24} color="black" />
        </View>
        <View style={styles.content}>
          <Text>Hello there</Text>
          <Image source={travel} style={styles.postImage} />
        </View>
        <View style={styles.info}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setLiked(!liked)}
          >
            {liked ? (
              <AntDesign name="hearto" size={20} color="black" />
            ) : (
              <AntDesign name="heart" size={20} color="black" />
            )}
            <Text style={styles.likesText}>12 Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => setCommentOpen(!commentOpen)}
          >
            <FontAwesome name="comment-o" size={24} color="black" />
            <Text style={styles.commentsText}>12 Comments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <AntDesign name="sharealt" size={24} color="black" />
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        </View>
        {/* {commentOpen && <Comments />} */}
      </View>
    </View>
  );
};

const styles = {
  post: {
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 25,
    shadowOpacity: 0.38,
    borderRadius: 20,
    backgroundColor: "#yourBackgroundColor", // replace with your actual background color
    color: "#yourTextColor", // replace with your actual text color
  },
  container: {
    padding: 20,
  },
  user: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfo: {
    display: "flex",
    gap: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
    objectFit: "cover",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontWeight: "500",
  },
  date: {
    fontSize: 12,
  },
  content: {
    margin: 20,
  },
  postImage: {
    width: "100%",
    maxHeight: 200,
    objectFit: "cover",
    marginTop: 20,
  },
  info: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    fontSize: 14,
  },
  likesText: {
    // add any specific styles for likes text
  },
  commentsText: {
    // add any specific styles for comments text
  },
  shareText: {
    // add any specific styles for share text
  },
};

export default Card;
