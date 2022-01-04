import React, { useContext, useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    FlatList,
    Pressable,
    TouchableOpacity,
    Modal,
    Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { AuthContext } from "../../../navigation/AuthProvider";
import styles from "./styles";

const PersonalData = ({ navigation }) => {
    const { age, setAge, gender, setGender, setFirstName, setLastName } =
        useContext(AuthContext);
    const [selectedFirstname, setSelectedFirstname] = useState("");
    const [selectedLastname, setSelectedLastname] = useState("");
    const [selectedGender, setSelectedGender] = useState();

    const [genderModalVisible, setGenderModalVisible] = useState(false);

    const genders = [
        { id: 1, value: "Erkak" },
        { id: 2, value: "Ayol" },
    ];

    const modalGender = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
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

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <View>
                <View style={styles.logoBox}>
                    <Image
                        source={require("../../../../assets/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={styles.signInWrapper}>
                        <Text style={styles.signIn}>Tizimga kirish</Text>
                    </View>
                </View>

                <View style={styles.personalDataBox}>
                    {/* Name input ------------------------------------ */}
                    <View
                        style={{
                            ...styles.inputContainer,
                        }}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Ism</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            numberOfLines={1}
                            placeholder="Ismingizni kiriting"
                            placeholderTextColor="#B8B8BB"
                            onChangeText={(value) =>
                                setSelectedFirstname(value)
                            }
                            keyboardType="default"
                            // autoFocus={true}
                            maxLength={20}
                        />
                    </View>

                    {/* Surname input ------------------------------------------ */}
                    <View
                        style={{
                            ...styles.inputContainer,
                        }}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Familiya</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            numberOfLines={1}
                            placeholder="Familiyangizni kiriting"
                            placeholderTextColor="#B8B8BB"
                            onChangeText={(value) => setSelectedLastname(value)}
                            keyboardType="default"
                            // autoFocus={true}
                            maxLength={20}
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
                                width: "48%",
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
                                placeholder="20"
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
                                width: "48%",
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
                        style={styles.sendCodeWrapper}
                        onPress={() => {
                            if (
                                age &&
                                gender &&
                                selectedFirstname &&
                                selectedLastname
                            ) {
                                setFirstName(selectedFirstname);
                                setLastName(selectedLastname);
                                navigation.navigate("AddAddress");
                            }
                        }}
                    >
                        <Text style={styles.sendCodeText}>Tasdiqlash</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default PersonalData;
