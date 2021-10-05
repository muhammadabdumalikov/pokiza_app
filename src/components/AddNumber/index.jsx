import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { AuthContext } from "../../navigation/AuthProvider.js";
import { styles } from "./styles";


const AddNumber = () => {
    const { setPhoneNumber } = useContext(AuthContext);
    let initialNumber;

    return (
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
                onPress={() => setPhoneNumber(initialNumber)}
            >
                <Text style={styles.sendCodeText}>Send code</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddNumber;
