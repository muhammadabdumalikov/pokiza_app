import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OrderScreen from "../screens/ClientScreens/OrdersScreen";
import { Dimensions } from "react-native";
import OrderDetailScreen from "../screens/ClientScreens/OrderDetailScreen";
import NoticesScreen from "../screens/ClientScreens/NoticeScreen";
import LocationScreen from "../screens/ClientScreens/LocationScreen";

const ClientTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const OrdersStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
                name="OrdersScreen"
                component={OrderScreen}
                options={{
                    headerTitle: "ID: #3493843",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                }}
            />
            <Stack.Screen
                name="OrderDetailScreen"
                component={OrderDetailScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    title: route.params.id,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <MaterialIcons
                                name="call"
                                size={24}
                                color="#007AFF"
                            />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
        </Stack.Navigator>
    );
};

const NoticesStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
                name="NoticesScreen"
                component={NoticesScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <MaterialIcons
                                name="call"
                                size={24}
                                color="#007AFF"
                            />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
        </Stack.Navigator>
    );
};

const LocationStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
                name="LocationScreen"
                component={LocationScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: 25,
                        textAlign: "center",
                    },
                    headerStyle: {
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <MaterialIcons
                                name="call"
                                size={24}
                                color="#007AFF"
                            />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
        </Stack.Navigator>
    );
};

// const MessageStack = ({ navigation }) => (
//     <Stack.Navigator>
//         <Stack.Screen name="Messages" component={MessagesScreen} />
//         <Stack.Screen
//             name="Chat"
//             component={ChatScreen}
//             options={({ route }) => ({
//                 title: route.params.userName,
//                 headerBackTitleVisible: false,
//             })}
//         />
//     </Stack.Navigator>
// );

// const ProfileStack = ({ navigation }) => (
//     <Stack.Navigator>
//         <Stack.Screen
//             name="Profile"
//             component={ProfileScreen}
//             options={{
//                 headerShown: false,
//             }}
//         />
//         <Stack.Screen
//             name="EditProfile"
//             component={EditProfileScreen}
//             options={{
//                 headerTitle: "Edit Profile",
//                 headerBackTitleVisible: false,
//                 headerTitleAlign: "center",
//                 headerStyle: {
//                     backgroundColor: "#fff",
//                     shadowColor: "#fff",
//                     elevation: 0,
//                 },
//             }}
//         />
//     </Stack.Navigator>
// );

const AppStack = () => {
    return (
        <ClientTab.Navigator
            initialRouteName="Orders"
            screenOptions={{
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#007AFF",
                headerShown: false,
                tabBarStyle: {
                    height: Dimensions.get("window").height / 9.78,
                    paddingBottom: 20
                },
            }}
        >
            <ClientTab.Screen
                name="Orders"
                component={OrdersStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="reorder" size={32} color={color} />
                    ),
                })}
            />
            <ClientTab.Screen
                name="Notices"
                component={NoticesStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="notifications-none"
                            color={color}
                            size={32}
                        />
                    ),
                })}
            />
            <ClientTab.Screen
                name="Location"
                component={LocationStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="location-history"
                            size={32}
                            color={color}
                        />
                    ),
                })}
            />
            <ClientTab.Screen
                name="Settings"
                component={OrdersStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="settings"
                            size={32}
                            color={color}
                        />
                    ),
                }}
            />
        </ClientTab.Navigator>
    );
};

export default AppStack;
