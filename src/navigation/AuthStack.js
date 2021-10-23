import React from "react";
import { Text, TouchableOpacity, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
    Feather,
} from "@expo/vector-icons";
import SignInScreen from "../screens/SignInScreen/AddNumber/SignInScreen";
import ConfirmCode from "../screens/SignInScreen/ConfirmCode";

const height = Dimensions.get("window").height;

const Stack = createStackNavigator();

const AuthStack = ({ navigation, route }) => {
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
        </Stack.Navigator>
    );
};


export default AuthStack;
