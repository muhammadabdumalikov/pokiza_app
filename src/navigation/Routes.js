import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "./AuthProvider";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import PersonalData from "../screens/SignInScreen/PersonalData";
import ConfirmCode from "../screens/SignInScreen/ConfirmCode";
import AddAddress from "../screens/SignInScreen/AddAddress";

const Stack = createStackNavigator();

export default Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Auth" component={AuthStack}/> 
                <Stack.Screen name="App" component={AppStack}/> 
            </Stack.Navigator>
            {/* <AuthStack /> */}
            {/* <AppStack /> */}
        </NavigationContainer>
    );
};
