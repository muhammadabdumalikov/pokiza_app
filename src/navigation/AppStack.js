import React from "react";
import { Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
    Feather,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OrderScreen from "../screens/ClientScreens/OrdersScreen";
import OrderDetailScreen from "../screens/ClientScreens/OrderDetailScreen";
import NoticesScreen from "../screens/ClientScreens/NoticeScreen";
import LocationScreen from "../screens/ClientScreens/LocationScreen";
import SettingsScreen from "../screens/ClientScreens/SettingsScreen";
import AddOrderScreen from "../screens/ClientScreens/OrdersScreen/AddOrderScreen";
import { colors } from "../constants/color";
import LogoImage from "../components/LogoImage";
import CallButton from "../components/callButton";
import EditInfo from "../screens/ClientScreens/SettingsScreen/EditInfo";
import EditPhoneNumber from "../screens/ClientScreens/SettingsScreen/EditPhoneNumber";
import EditLanguage from "../screens/ClientScreens/SettingsScreen/EditLanguage";
import EditLocation from "../screens/ClientScreens/SettingsScreen/EditLocation";

const height = Dimensions.get("window").height;

const ClientTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const OrdersStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "ID: #3493843",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 18,
                    top: 20,
                    textAlign: "center",
                },
                headerStyle: {
                    backgroundColor: "#F4F4F5",
                    shadowColor: "#fff",
                    elevation: 0,
                    height: height * 0.15,
                },
                headerRight: () => <CallButton />,
                headerLeft: () => <LogoImage />,
            }}
        >
            <Stack.Screen name="OrdersScreen" component={OrderScreen} />
            <Stack.Screen
                name="OrderDetailScreen"
                component={OrderDetailScreen}
            />
            <Stack.Screen name="AddOrderScreen" component={AddOrderScreen} />
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
                        top: height / 32.48,
                        textAlign: "center",
                    },
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Feather name="phone" size={24} color="#007AFF" />
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
                        top: height / 32.48,
                        textAlign: "center",
                    },
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Feather name="phone" size={24} color="#007AFF" />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
        </Stack.Navigator>
    );
};

const SettingsStack = ({ navigation, route }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#F4F4F5",
                    shadowColor: "#fff",
                    elevation: 0,
                    height: Dimensions.get("window").height / 5.8,
                },
                // title: route.params.id,
                headerRight: () => (
                    <TouchableOpacity style={{ marginRight: 20 }}>
                        <Feather name="phone" size={24} color="#007AFF" />
                    </TouchableOpacity>
                ),
                headerLeft: () => null,
            }}
        >
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: height / 32.48,
                        textAlign: "center",
                    },
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <Feather name="phone" size={24} color="#007AFF" />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => null,
                })}
            />
            <Stack.Screen
                name="EditInfo"
                component={EditInfo}
                options={({ route }) => ({
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                })}
            />
            <Stack.Screen
                name="EditPhoneNumber"
                component={EditPhoneNumber}
                options={({ route }) => ({
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                })}
            />
            <Stack.Screen
                name="EditLanguage"
                component={EditLanguage}
                options={({ route }) => ({
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                })}
            />
             <Stack.Screen
                name="EditLocation"
                component={EditLocation}
                options={({ route }) => ({
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                    // title: route.params.id,
                })}
            />
        </Stack.Navigator>
    );
};

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
                    paddingBottom: height / 40.6,
                    backgroundColor: "#F4F4F5",
                },
                headerTitle: "ID: #3493843",
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 18,
                    top: 30,
                    textAlign: "center",
                },
                headerStyle: {
                    backgroundColor: "#F4F4F5",
                    shadowColor: "#fff",
                    elevation: 0,
                    height: height * 0.15,
                },
                headerRight: () => <CallButton />,
                headerLeft: () => <LogoImage />,
            }}
        >
            <ClientTab.Screen
                name="Orders"
                component={OrdersStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="menu" size={24} color={color} />
                    ),
                })}
            />
            <ClientTab.Screen
                name="Notices"
                component={NoticesStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="bell" size={24} color={color} />
                    ),
                })}
            />
            <ClientTab.Screen
                name="Location"
                component={LocationStack}
                options={({ route }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="map" size={24} color={color} />
                    ),
                })}
            />
            <ClientTab.Screen
                name="Settings"
                component={SettingsStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={24} color={color} />
                    ),
                }}
            />
        </ClientTab.Navigator>
    );
};

export default AppStack;
