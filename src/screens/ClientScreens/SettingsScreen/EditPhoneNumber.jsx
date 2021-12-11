import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../navigation/AuthProvider";
import { styles } from "./styles";
import { request } from "../../../helpers/request";

const EditPhoneNumber = ({ navigation }) => {
    const { setUser, user } = useContext(AuthContext);

    const [newMainContact, setNewMainContact] = useState("");
    const [newSecondContact, setNewSecondContact] = useState("");
    const [userToken, setUserToken] = useState();
    const [userId, setUserId] = useState();
    const [userInfo, setUserInfo] = useState();
    const [isLoading, setLoading] = useState(true);

    const GET_USER = `query($clientId: ID){
        clients(clientId: $clientId){
          clientId
          clientInfo{
            userId
            mainContact
            secondContact
            firstName
            lastName
            age
            gender
          }
        }
      }`;

    const CHANGE_MAINCONTACT_QUERY = `mutation($userId:ID!, $mainContact:String){
        changeUser(userId: $userId, mainContact: $mainContact){
          status
          message
          data
        }
      }`;

    const ADD_SECOND_CONTACT = `mutation($userId:ID!, $secondContact:String){
        changeUser(userId: $userId, secondContact: $secondContact){
          status
          message
          data
        }
      }`;

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("user_token");
                const user = await request(GET_USER, null, value);
                setUserToken(value);
                setUserId(user.clients[0].clientInfo.userId);
                setUserInfo(user);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const errorAlert = () => {
        Alert.alert("Bu raqam bilan ro'yxatdan o'tilgan!", "", [
            {
                text: "Qaytish",
                onPress: () => null,
                style: "cancel",
            },
        ]);
    };

    const onSuccess = () => {
        Alert.alert("Raqam muvaffaqiyatli qo'shildi", "", [
            {
                text: "Qaytish",
                onPress: () => null,
                style: "cancel",
            },
        ]);
    };

    const confirmMainContact = () => {
        Alert.alert("Asosiy raqamni o'zgartirishni istaysizmi?", "", [
            {
                text: "Yo'q",
                onPress: () => null,
                style: "cancel",
            },
            {
                text: "Ha, xohlayman",
                onPress: async () => {
                    let newContact = await request(
                        CHANGE_MAINCONTACT_QUERY,
                        {
                            userId: userId,
                            mainContact: newMainContact
                                ? newMainContact
                                : userInfo.clients[0].clientInfo.mainContact,
                        },
                        userToken
                    );

                    if (newContact.changeUser.status == 200) {
                        let keys = [];
                        keys = await AsyncStorage.getAllKeys();
                        await AsyncStorage.multiRemove(keys);
                        navigation.navigate("Auth", { screen: "SignInScreen" });
                    } else {
                        errorAlert();
                    }
                },
            },
        ]);
    };

    const confirmSecondContact = () => {
        Alert.alert("Qo'shimcha raqamni o'zgartirishni istaysizmi?", "", [
            {
                text: "Yo'q",
                onPress: () => null,
                style: "cancel",
            },
            {
                text: "Ha, xohlayman",
                onPress: async () => {
                    let secondContact = await request(
                        ADD_SECOND_CONTACT,
                        {
                            userId: userId,
                            secondContact: newSecondContact
                                ? newSecondContact
                                : userInfo.clients[0].clientInfo.secondContact,
                        },
                        userToken
                    );

                    await AsyncStorage.setItem(
                        "secondContact",
                        secondContact.changeUser.data.second_contact
                    );
                    if (secondContact.changeUser.status == 200) {
                        onSuccess();
                    } else {
                        errorAlert();
                    }
                },
            },
        ]);
    };

    return (
        <>
            {isLoading ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator
                        size="large"
                        color="#2196F3"
                        style={{ alignSelf: "center" }}
                    />
                </View>
            ) : (
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.content}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>
                        Telefon raqamini o'zgartirish
                    </Text>
                    <View style={styles.phoneLine}>
                        <Text style={styles.preText}>
                            Asosiy telefon raqam:
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.preText}
                                placeholder={
                                    userInfo
                                        ? `${userInfo.clients[0].clientInfo.mainContact}`
                                        : "Asosiy raqamingizni kiriting"
                                }
                                placeholderTextColor="#B8B8BB"
                                maxLength={12}
                                keyboardType="phone-pad"
                                onChangeText={(value) =>
                                    setNewMainContact(value)
                                }
                            />
                            <TouchableOpacity
                                style={styles.confirmPhoneChangedBtn}
                                onPress={confirmMainContact}
                                disabled={newMainContact.length < 12}
                            >
                                <Text
                                    style={{
                                        ...styles.confirmPhoneChanged,
                                        backgroundColor:
                                            newMainContact.length < 12
                                                ? "#AAADB0"
                                                : "#007AFF",
                                    }}
                                >
                                    Tasdiqlash
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.phoneLine}>
                        <Text style={styles.preText}>
                            Qo'shimcha telefon raqam:
                        </Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.preText}
                                placeholder={
                                    userInfo.clients[0].clientInfo.secondContact
                                        ? `${userInfo.clients[0].clientInfo.secondContact}`
                                        : "Qo'shimcha raqamingizni kiriting"
                                }
                                placeholderTextColor="#B8B8BB"
                                maxLength={12}
                                keyboardType="phone-pad"
                                onChangeText={(value) =>
                                    setNewSecondContact(value)
                                }
                            />
                            <TouchableOpacity
                                style={styles.confirmPhoneChangedBtn}
                                onPress={confirmSecondContact}
                                disabled={newSecondContact.length < 12}
                            >
                                <Text
                                    style={{
                                        ...styles.confirmPhoneChanged,
                                        backgroundColor:
                                            newSecondContact.length < 12
                                                ? "#AAADB0"
                                                : "#007AFF",
                                    }}
                                >
                                    Tasdiqlash
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            )}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </>
    );
};

export default EditPhoneNumber;
