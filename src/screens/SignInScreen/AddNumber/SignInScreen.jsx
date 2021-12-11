import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../navigation/AuthProvider";
import { request } from "../../../helpers/request.js";
import styles from "./styles";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import LogoSvg from "../../../../assets/svg/logo";

const LOGIN = gql`
    mutation ($phoneNumber: String!) {
        enterClientPhone(phoneNumber: $phoneNumber) {
            status
            data
            token
            message
        }
    }
`;

export default function ({ navigation }) {
    const { phoneNumber, setPhoneNumber } = useContext(AuthContext);
    const [login, { loading }] = useMutation(LOGIN);

    const handleLoginPress = () => {
        login({
            variables: {
                phoneNumber: phoneNumber,
            },
        })
            .then(async ({ data }) => {
                console.log(data)
                if (data.enterClientPhone.status == 200) {
                    navigation.navigate("ConfirmCode", {
                        phoneToken: data.enterClientPhone.token,
                    });
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
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.logoBox}>
                <Image
                    source={require("../../../../assets/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View style={styles.signInWrapper}>
                    <Text style={styles.signIn}>Tizimga kirish</Text>
                    <Text style={styles.signInDescription}>
                        Tizimga kirish uchun telefon raqamingizni kiriting.
                    </Text>
                </View>
            </View>
            <View style={styles.signInBox}>
                <View
                    style={styles.inputContainer}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Telefon Raqam:</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={{ fontSize: 18, color: "black" }}>
                            +998
                        </Text>
                        <TextInput
                            style={styles.input}
                            numberOfLines={1}
                            placeholderTextColor="#B8B8BB"
                            onChangeText={(number) =>
                                setPhoneNumber(`998${number}`)
                            }
                            keyboardType="phone-pad"
                            // autoFocus={true}
                            maxLength={9}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.sendCodeWrapper}
                    onPress={handleLoginPress}
                    disabled={loading}
                >
                    <Text style={styles.sendCodeText}>Davom etish</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
