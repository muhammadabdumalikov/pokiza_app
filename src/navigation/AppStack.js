import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
} from "react-native-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Ipeyol Homepage"
            component={HomeScreen}
            options={{
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 18,
                },
                headerStyle: {
                    shadowColor: "#fff",
                    elevation: 0,
                },
            }}
        />
    </Stack.Navigator>
);

const MessageStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({ route }) => ({
                title: route.params.userName,
                headerBackTitleVisible: false,
            })}
        />
    </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{
                headerTitle: "Edit Profile",
                headerBackTitleVisible: false,
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "#fff",
                    shadowColor: "#fff",
                    elevation: 0,
                },
            }}
        />
    </Stack.Navigator>
);

const AppStack = () => {
    const getTabBarVisibility = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : "";

        if (routeName === "Chat") {
            return false;
        }
        return true;
    };

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#2e64e5",
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Category"
                component={MessageStack}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    // Or Hide tabbar when push!
                    // https://github.com/react-navigation/react-navigation/issues/7677
                    // tabBarVisible: route.state && route.state.index === 0,
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="menu" size={24} color="black" />
                    ),
                })}
            />
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={({ route }) => ({
                    tabBarLabel: "Home",
                    // tabBarVisible: route.state && route.state.index === 0,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Messages"
                component={MessageStack}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    // Or Hide tabbar when push!
                    // https://github.com/react-navigation/react-navigation/issues/7677
                    // tabBarVisible: route.state && route.state.index === 0,
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="chatbox-ellipses-outline"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="person-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default AppStack;
