import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";

import { AuthContext } from "../../../navigation/AuthProvider";

import styles from "./styles";

export default function ({navigation}) {
    const { setPhoneNumber } = useContext(AuthContext);
    let initialNumber;

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.logoBox}>
                <Text style={styles.signIn}>Sign In</Text>
                <Text style={styles.signInDescription}>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure
                </Text>
            </View>
            <View style={styles.signInBox}>
                <View
                    style={styles.inputContainer}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Number</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        numberOfLines={1}
                        placeholder="Enter phone number"
                        placeholderTextColor="#B8B8BB"
                        onChangeText={(number) => (initialNumber = number)}
                        keyboardType="phone-pad"
                        // autoFocus={true}
                        maxLength={9}
                    />
                </View>
                <TouchableOpacity style={styles.forgotPassWrapper}>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.sendCodeWrapper}
                    onPress={() => {
                        setPhoneNumber(initialNumber);
                        navigation.navigate("ConfirmCode")
                    }}
                >
                    <Text style={styles.sendCodeText}>Send code</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
