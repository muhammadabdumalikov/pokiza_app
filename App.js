import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Providers from "./src/navigation";
import SignInScreen from "./src/screens/SignInScreen/SignInScreen";

export default function App() {
    return <Providers />;
}

