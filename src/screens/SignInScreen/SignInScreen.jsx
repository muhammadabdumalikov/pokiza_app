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

export default function () {
    const { phoneNumber, setPhoneNumber } = useContext(AuthContext);
    let initialNumber;

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
                    <View style={styles.signInBox}>
                        <View
                            style={styles.inputContainer}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Number</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                numberOfLines={1}
                                placeholder="Enter phone number"
                                placeholderTextColor="#B8B8BB"
                                onChangeText={(number) =>
                                    (initialNumber = number)
                                }
                                keyboardType="phone-pad"
                                // autoFocus={true}
                                maxLength={9}
                            />
                        </View>
                        <TouchableOpacity style={styles.forgotPassWrapper}>
                            <Text style={styles.forgotPass}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.sendCodeWrapper}
                            onPress={() => setPhoneNumber(initialNumber)}
                        >
                            <Text style={styles.sendCodeText}>Send code</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}
