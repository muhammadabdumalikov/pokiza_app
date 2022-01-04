import React, {useState, useEffect} from "react";
import { Text, TouchableOpacity, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
    Feather,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SignInScreen from "../screens/SignInScreen/AddNumber/SignInScreen";
import ConfirmCode from "../screens/SignInScreen/ConfirmCode";
import PersonalData from "../screens/SignInScreen/PersonalData";
import AddAddress from "../screens/SignInScreen/AddAddress";

const height = Dimensions.get("window").height;

const Stack = createStackNavigator();

const AuthStack = ({ navigation, route }) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                const value = await AsyncStorage.getItem("user_token");
                if (value !== null) {
                    setToken(value);
                    navigation.navigate("App")
                }
            } catch (e) {
                console.log(e);
            }
        }
        getData();
    }, []);

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerTitle: "ID: #3493843",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: height/32.48,
                        textAlign: "center",
                    },
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                }}
            />
               <Stack.Screen
                name="ConfirmCode"
                component={ConfirmCode}
                options={{
                    headerTitle: "ID: #3493843",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: height/32.48,
                        textAlign: "center",
                    },
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                }}
            />
             <Stack.Screen
                name="PersonalData"
                component={PersonalData}
                options={{
                    headerTitle: "ID: #3493843",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: height/32.48,
                        textAlign: "center",
                    },
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                }}
            />
            <Stack.Screen
                name="AddAddress"
                component={AddAddress}
                options={{
                    headerTitle: "ID: #3493843",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 18,
                        top: height/32.48,
                        textAlign: "center",
                    },
                    headerStyle: {
                        backgroundColor: "#F4F4F5",
                        shadowColor: "#fff",
                        elevation: 0,
                        height: Dimensions.get("window").height / 5.8,
                    },
                }}
            />
        </Stack.Navigator>
    );
};


export default AuthStack;
