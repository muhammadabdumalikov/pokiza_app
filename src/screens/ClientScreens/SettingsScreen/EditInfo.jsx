import React, { useContext, useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../navigation/AuthProvider";
import { styles } from "./styles";
import { request } from "../../../helpers/request";

const EditInfo = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    const [userId, setUserId] = useState();
    const [userInfo, setUserInfo] = useState();
    const [userToken, setUserToken] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
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

    const CHANGE_INFO_QUERY = `mutation($userId:ID!, $firstName:String, $lastName: String, $age:Int, $gender:Int){
        changeUser(userId: $userId, firstName: $firstName, lastName: $lastName, age: $age, gender: $gender){
          status
          message
          data
        }
      }`;

    const onSuccess = () => {
        Alert.alert("Ma'lumotlar muvaffaqiyatli o'zgartirildi!", "", [
            {
                text: "OK",
                onPress: () => navigation.goBack(),
                style: "cancel",
            },
        ]);
    };

    const onError = () => {
        Alert.alert("Operatsiya amalga oshmadi!", "", [
            {
                text: "Qaytish",
                onPress: () => null,
                style: "cancel",
            },
        ]);
    };

    const confirmAlert = () => {
        Alert.alert("Ma'lumotlaringizni o'zgartirishni istaysizmi?", "", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel",
            },
            {
                text: "OK",
                onPress: async () => {
                    let changeInfo = await request(
                        CHANGE_INFO_QUERY,
                        {
                            userId: userId,
                            firstName: firstName,
                            lastName: lastName,
                            age: parseInt(age),
                            gender: gender,
                        },
                        userToken
                    );
                    if (changeInfo.changeUser.status == 200) {
                        onSuccess();
                    } else {
                        onError();
                    }
                },
            },
        ]);
    };

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
                    <Text style={styles.title}>Ma'lumotlarni o'zgartirish</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.preText}>Familiya</Text>
                        <TextInput
                            style={styles.preText}
                            placeholder={
                                userInfo
                                    ? `${userInfo.clients[0].clientInfo.lastName}`
                                    : "Familiyangizni kiriting"
                            }
                            placeholderTextColor="#B8B8BB"
                            maxLength={20}
                            onChangeText={(value) => setLastName(value)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.preText}>Ism</Text>
                        <TextInput
                            style={styles.preText}
                            placeholder={
                                userInfo
                                    ? `${userInfo.clients[0].clientInfo.firstName}`
                                    : "Ismingizni kiriting"
                            }
                            placeholderTextColor="#B8B8BB"
                            maxLength={20}
                            onChangeText={(value) => setFirstName(value)}
                        />
                    </View>
                    <View
                        style={{
                            ...styles.inputContainer,
                            borderBottomWidth: 0,
                        }}
                    >
                        {/* Age input ----------------------------------------------- */}
                        <View
                            style={{
                                ...styles.inputContainer,
                                borderBottomWidth: 1,
                                width: "50%",
                            }}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Yosh</Text>
                            </View>
                            <TextInput
                                style={{ height: "100%", width: "50%" }}
                                numberOfLines={1}
                                placeholder={
                                    userInfo
                                        ? `${userInfo.clients[0].clientInfo.age}`
                                        : "20"
                                }
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
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
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
                                <Picker.Item label="Erkak" value={1} />
                                <Picker.Item label="Ayol" value={2} />
                            </Picker>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.confirmEditInfoBtn}
                        onPress={confirmAlert}
                    >
                        <Text style={styles.confirmEditInfoChanged}>
                            Tasdiqlash
                        </Text>
                    </TouchableOpacity>
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

export default EditInfo;
