import React, { useContext, useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    ScrollView,
    Modal,
    Pressable,
    FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../navigation/AuthProvider";
import { styles } from "./styles";
import { request } from "../../../helpers/request";

const EditInfo = ({ navigation }) => {
    const [userId, setUserId] = useState();
    const [userInfo, setUserInfo] = useState();
    const [userToken, setUserToken] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [selectedGender, setSelectedGender] = useState();
    const [isLoading, setLoading] = useState(true);
    const [send, setSend] = useState(false);

    const [genderModalVisible, setGenderModalVisible] = useState(false);

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

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("user_token");
                const clientId = await AsyncStorage.getItem("clientId");
                const user = await request(
                    GET_USER,
                    { clientId: clientId },
                    value
                );
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

    const genders = [
        { id: 1, value: "Erkak" },
        { id: 2, value: "Ayol" },
    ];

    const modalGender = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setGender(item.id);
                    setSelectedGender(item);
                    setGenderModalVisible(!genderModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.value}
                </Text>
            </TouchableOpacity>
        );
    };
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
                text: "Qaytish",
                onPress: () => null,
                style: "cancel",
            },
            {
                text: "OK",
                onPress: async () => {
                    setSend(true);
                    let changeInfo = await request(
                        CHANGE_INFO_QUERY,
                        {
                            userId: userId,
                            firstName: firstName
                                ? firstName
                                : userInfo.clients[0].clientInfo.firstName,
                            lastName: lastName
                                ? lastName
                                : userInfo.clients[0].clientInfo.lastName,
                            age: age
                                ? parseInt(age)
                                : userInfo.clients[0].clientInfo.age,

                            gender: gender
                                ? gender
                                : userInfo.clients[0].clientInfo.gender,
                        },
                        userToken
                    );

                    if (changeInfo.changeUser.status == 200) {
                        setSend(false);
                        onSuccess();
                    } else {
                        onError();
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
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={genderModalVisible}
                                onRequestClose={() => {
                                    setGenderModalVisible(!genderModalVisible);
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View
                                        style={[
                                            styles.modalWrapper,
                                            styles.tariffModalWrapper,
                                        ]}
                                    >
                                        <FlatList
                                            data={genders}
                                            renderItem={modalGender}
                                            keyExtractor={(item) => item.id}
                                            contentContainerStyle={
                                                styles.modalView
                                            }
                                            style={styles.contenModalView}
                                            showsVerticalScrollIndicator={false}
                                        />
                                    </View>
                                    <Pressable
                                        style={[
                                            styles.button,
                                            styles.buttonClose,
                                        ]}
                                        onPress={() =>
                                            setGenderModalVisible(
                                                !genderModalVisible
                                            )
                                        }
                                    >
                                        <Text style={styles.hideModalButton}>
                                            Yopish
                                        </Text>
                                    </Pressable>
                                </View>
                            </Modal>
                            <Pressable
                                style={styles.buttonOpen}
                                onPress={() => setGenderModalVisible(true)}
                            >
                                <Text style={styles.textStyle}>
                                    {selectedGender
                                        ? selectedGender.value
                                        : "Tanlang"}
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.confirmEditInfoBtn}
                        onPress={confirmAlert}
                    >
                        {send ? (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <ActivityIndicator
                                    size="small"
                                    color="white"
                                    style={{ alignSelf: "center" }}
                                />
                            </View>
                        ) : (
                            <Text style={styles.confirmEditInfoChanged}>
                                Tasdiqlash
                            </Text>
                        )}
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
