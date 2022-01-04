import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

export default Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={AuthStack} />
                <Stack.Screen name="App" component={AppStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
