import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import PersonalData from "../screens/SignInScreen/PersonalData";
import ConfirmCode from "../screens/SignInScreen/ConfirmCode";
import AddAddress from "../screens/SignInScreen/AddAddress";

export default Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {}, []);

    return (
        <NavigationContainer>
            {/* {user ? <AppStack /> : <AuthStack />} */}
            {/* <AddAddress/> */}
            <AppStack />
        </NavigationContainer>
    );
};
