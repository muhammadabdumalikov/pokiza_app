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
import { request } from "../../../helpers/request.js";
import styles from "./styles";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

const LOGIN = gql`
mutation ($phoneNumber: String!){
    enterClientPhone(phoneNumber: $phoneNumber){
      status
      data
      message
    }
  }
`;

export default function ({ navigation }) {
    const {phoneNumber, setPhoneNumber} = useContext(AuthContext);
    const [login, {loading}] = useMutation(LOGIN);
    
    const handleLoginPress = () => {
        login({
            variables: {
                phoneNumber: phoneNumber,
            }
        })
            .then(({data}) => {
                console.log(data);
                if (data.enterClientPhone.status == 200) {
                    navigation.navigate("ConfirmCode");
                }
            })
            .catch((err) => {
                console.log(err);
            });

        // try {
        //     let data = await request(LOGIN, {
        //         phoneNumber: phoneNumber,
        //     });
        //     console.log(data)
        //     if (data.enterClientPhone.status == 200) {
        //         navigation.navigate("ConfirmCode");
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    }

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
                        onChangeText={(number) => setPhoneNumber(number)}
                        keyboardType="phone-pad"
                        // autoFocus={true}
                        maxLength={12}
                    />
                </View>
                <TouchableOpacity style={styles.forgotPassWrapper}>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.sendCodeWrapper}
                    onPress={handleLoginPress}
                    disabled={loading}
                >
                    <Text style={styles.sendCodeText}>Send code</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
