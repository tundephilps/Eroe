import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Comment from "./Comment";

const Post = () => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked);
  };

  return (
    <>
      <View style={styles.card}>
        <View style={styles.head}>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Image
              style={{ height: 35, width: 35, borderRadius: 99 }}
              source={require("../assets/face.jpeg")}
              resizeMode="cover"
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                Micheal Jackson
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "200", color: "gray" }}>
                Few months ago
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", gap: 12, paddingTop: 12 }}>
          <Text style={{ fontWeight: "200" }}>
            We are here to have a good time
          </Text>
          <Image
            style={{ height: 230, width: "100%", borderRadius: 6 }}
            source={require("../assets/travel.jpg")}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            paddingTop: 12,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            onPress={handleLikePress}
          >
            {liked ? (
              <AntDesign name="heart" size={20} color="red" />
            ) : (
              <AntDesign name="hearto" size={20} color="black" />
            )}
            <Text style={{ fontWeight: "200" }}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            onPress={() => setCommentOpen(!commentOpen)}
          >
            <FontAwesome name="comment-o" size={20} color="black" />
            <Text>Comment</Text>
          </TouchableOpacity>
        </View>
        {commentOpen && <Comment />}
      </View>

      <View style={styles.card}>
        <View style={styles.head}>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Image
              style={{ height: 35, width: 35, borderRadius: 99 }}
              source={require("../assets/face2.jpg")}
              resizeMode="cover"
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                Lara Croft
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "200", color: "gray" }}>
                Few months ago
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", gap: 12, paddingTop: 12 }}>
          <Text style={{ fontWeight: "200" }}>
            Good things comes to those who wait at the right time.. Dont lose
            patience
          </Text>
          <Image
            style={{ height: 230, width: "100%", borderRadius: 6 }}
            source={require("../assets/travel2.jpg")}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            paddingTop: 12,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            onPress={handleLikePress}
          >
            {liked ? (
              <AntDesign name="heart" size={20} color="red" />
            ) : (
              <AntDesign name="hearto" size={20} color="black" />
            )}
            <Text style={{ fontWeight: "200" }}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            onPress={() => setCommentOpen(!commentOpen)}
          >
            <FontAwesome name="comment-o" size={20} color="black" />
            <Text>Comment</Text>
          </TouchableOpacity>
        </View>
        {commentOpen && <Comment />}
      </View>
      <View style={styles.card}>
        <View style={styles.head}>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Image
              style={{ height: 35, width: 35, borderRadius: 99 }}
              source={require("../assets/face3.jpg")}
              resizeMode="cover"
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                Fred Dickson
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "200", color: "gray" }}>
                Few months ago
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", gap: 12, paddingTop: 12 }}>
          <Text style={{ fontWeight: "200" }}>
            The Sports is good for your soul
          </Text>
          <Image
            style={{ height: 230, width: "100%", borderRadius: 6 }}
            source={require("../assets/travel3.webp")}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            paddingTop: 12,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            onPress={handleLikePress}
          >
            {liked ? (
              <AntDesign name="heart" size={20} color="red" />
            ) : (
              <AntDesign name="hearto" size={20} color="black" />
            )}
            <Text style={{ fontWeight: "200" }}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            onPress={() => setCommentOpen(!commentOpen)}
          >
            <FontAwesome name="comment-o" size={20} color="black" />
            <Text>Comment</Text>
          </TouchableOpacity>
        </View>
        {commentOpen && <Comment />}
      </View>
    </>
  );
};

export default Post;

const styles = StyleSheet.create({
  card: {
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 0 },

    shadowOpacity: 0.38,
    borderRadius: 20,
    backgroundColor: "#fffffe", // replace with your actual background color
    color: "#000000", // replace with your actual text color
    padding: 12,
    marginTop: 8,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
