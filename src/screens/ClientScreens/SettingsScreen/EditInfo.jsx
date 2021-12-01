import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../navigation/AuthProvider";
import { styles } from "./styles";

const EditInfo = ({ navigation }) => {
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userToken, setUserToken] = useState();


    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("user_token");
                setAge(await AsyncStorage.getItem("age"));
                setGender(await AsyncStorage.getItem("gender"));
                setFirstName(await AsyncStorage.getItem("firstName"));
                setLastName(await AsyncStorage.getItem("lastName"));
                setUserToken(value);
                // setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const confirmAlert = () =>
        Alert.alert("Alert Title", "My Alert Msg", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ma'lumotlarni o'zgartirish</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.preText}>Familiya</Text>
                <TextInput
                    style={styles.preText}
                    placeholder={`${lastName}`}
                    placeholderTextColor="#B8B8BB"
                    maxLength={20}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.preText}>Ism</Text>
                <TextInput
                    style={styles.preText}
                    placeholder={`${firstName}`}
                    placeholderTextColor="#B8B8BB"
                    maxLength={20}
                />
            </View>
            <View style={{ ...styles.inputContainer, borderBottomWidth: 0 }}>
                {/* Age input ----------------------------------------------- */}
                <View
                    style={{
                        ...styles.inputContainer,
                        borderBottomWidth: 1,
                        width: "50%",
                    }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Yosh</Text>
                    </View>
                    <TextInput
                        style={{ height: "100%", width: "50%" }}
                        numberOfLines={1}
                        placeholder={`${age}`}
                        placeholderTextColor="#B8B8BB"
                        onChangeText={(value) => setAge(value)}
                        keyboardType="numeric"
                        // autoFocus={true}
                        maxLength={3}
                    />
                </View>

                {/* Gender input --------------------------------------------- */}
                <View
                    style={{
                        ...styles.inputContainer,
                        borderBottomWidth: 1,
                        width: "50%",
                    }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Jins</Text>
                    </View>
                    <Picker
                        style={{ height: "100%", width: 120 }}
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) => {
                            setGender(itemValue);
                        }}
                    >
                        <Picker.Item label="Erkak" value="male" />
                        <Picker.Item label="Ayol" value="female" />
                    </Picker>
                </View>
            </View>
            <TouchableOpacity
                style={styles.confirmEditInfoBtn}
                onPress={confirmAlert}
            >
                <Text style={styles.confirmEditInfoChanged}>Tasdiqlash</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default EditInfo;
