import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../navigation/AuthProvider";
import { styles } from "./styles";
import { request } from "../../../helpers/request";

const EditPhoneNumber = ({ navigation }) => {
    const { setUser } = useContext(AuthContext);

    const [mainContact, setMainContact] = useState();
    const [secondContact, setSecondContact] = useState();
    const [newMainContact, setNewMainContact] = useState();
    const [newSecondContact, setNewSecondContact] = useState();
    const [userToken, setUserToken] = useState();
    const [userId, setUserId] = useState();

    const GET_USER_ID = `{
        clients{
          clientInfo{
            userId
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
                const id = await request(GET_USER_ID, null, value);
                setMainContact(await AsyncStorage.getItem("mainContact"));
                setSecondContact(await AsyncStorage.getItem("secondContact"));
                setUserToken(value);
                setUserId(id.clients[0].clientInfo.userId);
                // setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const errorAlert = () => {
        Alert.alert("Bu raqam band qilingan", "", [
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
                            mainContact: newMainContact,
                        },
                        userToken
                    );
                    if (newContact.changeUser.status == 200) {
                        setUser(null);
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
                            secondContact: newSecondContact,
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
        <View style={styles.container}>
            <Text style={styles.title}>Ma'lumotlarni o'zgartirish</Text>
            <View style={styles.phoneLine}>
                <Text style={styles.preText}>Asosiy telefon raqam:</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.preText}
                        placeholder={`${mainContact}`}
                        placeholderTextColor="#B8B8BB"
                        maxLength={12}
                        keyboardType="phone-pad"
                        onChangeText={(value) => setNewMainContact(value)}
                    />
                    <TouchableOpacity
                        style={styles.confirmPhoneChangedBtn}
                        onPress={confirmMainContact}
                    >
                        <Text style={styles.confirmPhoneChanged}>
                            Tasdiqlash
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.phoneLine}>
                <Text style={styles.preText}>Qo'shimcha telefon raqam:</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.preText}
                        placeholder={
                            secondContact ? `${secondContact}` : "9989xxxxxxxx"
                        }
                        placeholderTextColor="#B8B8BB"
                        maxLength={12}
                        keyboardType="phone-pad"
                        onChangeText={(value) => setNewSecondContact(value)}
                    />
                    <TouchableOpacity
                        style={styles.confirmPhoneChangedBtn}
                        onPress={confirmSecondContact}
                    >
                        <Text style={styles.confirmPhoneChanged}>
                            Tasdiqlash
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default EditPhoneNumber;
