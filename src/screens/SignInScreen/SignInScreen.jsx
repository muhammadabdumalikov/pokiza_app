import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";

import { AuthContext } from "../../navigation/AuthProvider.js";

import ConfirmCode from "../../components/ConfirmCode/index.jsx";
import styles from "./styles";
import AddNumber from "../../components/AddNumber/index.jsx";
import PersonalData from "../../components/PersonalData/index.jsx";
import AddAdressData from "../../components/AddAdress/index.jsx";


export default function () {
    const { phoneNumber, code, firstName } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.logoBox}>
                    <Text style={styles.signIn}>Sign In</Text>
                    {code ? null : (
                        <Text style={styles.signInDescription}>
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure
                        </Text>
                    )}
                </View>
                <AddAdressData/>
                {/* {firstName ? <AddAdressData/> : null}
                {code ? <PersonalData /> : null}
                {phoneNumber ? <ConfirmCode/> : <AddNumber/>} */}
            </ScrollView>
        </SafeAreaView>
    );
}
