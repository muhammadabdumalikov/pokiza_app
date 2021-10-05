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

export default function () {
    const { phoneNumber } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.area}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.logoBox}>
                    <Text style={styles.signIn}>Sign In</Text>
                    <Text style={styles.signInDescription}>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure
                    </Text>
                </View>
                {phoneNumber ? (
                   <ConfirmCode/>
                ) : (
                    <AddNumber/>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
