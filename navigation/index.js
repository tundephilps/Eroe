import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, Feather, FontAwesome6 } from "@expo/vector-icons";

import Login from "../screens/Login";
import Homepage from "../screens/TabScreens/Homepage";
import Friends from "../screens/TabScreens/Friends";
import CreatePostScreen from "../screens/TabScreens/CreatePost";
import Notifications from "../screens/TabScreens/Notifications";
import Profile from "../screens/TabScreens/Profile";
import SignUp from "../screens/SignUp";
import ForgetPassword from "../screens/ForgetPassword";
import Welcome from "../screens/Welcome";
import Chats from "../screens/Chat";
import MessagesScreen from "../screens/Messages";
import EditProfile from "../screens/EditProfile";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="MyTabs" component={MyTabs} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />

        <Stack.Screen name="Welcome" component={Welcome} />

        <Stack.Screen name="Message" component={MessagesScreen} />
        <Stack.Screen name="Chats" component={Chats} />

        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: Platform.OS === "ios" ? 90 : 60,
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "#A10F7E" : "#000000"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Friends}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name={focused ? "users-between-lines" : "users-viewfinder"}
                size={24}
                color={focused ? "#A10F7E" : "#000000"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="CreatePosts"
          component={CreatePostScreen}
          options={({ route }) => ({
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#A10F7E",
                  height: Platform.OS === "ios" ? 70 : 60,
                  width: Platform.OS === "ios" ? 70 : 60,
                  top: Platform.OS === "ios" ? -20 : -30,
                  borderRadius: Platform.OS === "ios" ? 35 : 30,
                  borderWidth: 2,
                  borderColor: "white",
                }}
              >
                <Ionicons name="add" size={24} color="white" />
              </View>
            ),
            tabBarVisible: route.state && route.state.index === 0, // Hide the bottom tab for CreatePostScreen
          })}
        />

        <Tab.Screen
          name="Notification"
          component={Notifications}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "notifications-sharp" : "notifications-outline"}
                size={24}
                color={focused ? "#A10F7E" : "#000000"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? "#A10F7E" : "#000000"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
