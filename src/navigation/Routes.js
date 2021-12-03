import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./AuthProvider";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import PersonalData from "../screens/SignInScreen/PersonalData";
import ConfirmCode from "../screens/SignInScreen/ConfirmCode";
import AddAddress from "../screens/SignInScreen/AddAddress";

export default Routes = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState()

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem("user");
                if (value !== null) {
                    setUser(value);
                }
            } catch (e) {
                console.log(e)
            }
        };
        getData()
    }, []);

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
            {/* <AddAddress/> */}
            {/* <AppStack /> */}
        </NavigationContainer>
    );
};
