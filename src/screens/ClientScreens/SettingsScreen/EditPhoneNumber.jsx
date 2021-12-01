import React, {useState, useEffect  } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";

const EditPhoneNumber = ({ navigation }) => {
    const [mainContact, setMainContact] = useState();
    const [userToken, setUserToken] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("user_token");
                setMainContact(await AsyncStorage.getItem("mainContact"));
                setUserToken(value);
                // setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const confirmMainContact = () =>
        Alert.alert("Asosiy raqamni o'zgartirishni istaysizmi?", "", [
            {
                text: "Yo'q",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            { text: "Ha, xohlayman", onPress: () => console.log("OK Pressed") },
        ]);

    const confirmSecondContact = () =>
        Alert.alert("Qo'shimcha raqamni o'zgartirishni istaysizmi?", "", [
            {
                text: "Yo'q",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            { text: "Ha, xohlayman", onPress: () => console.log("OK Pressed") },
        ]);
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
                        placeholder="998"
                        placeholderTextColor="#B8B8BB"
                        maxLength={12}
                        keyboardType="phone-pad"
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
