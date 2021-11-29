import React, { useContext, useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Image
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { AuthContext } from "../../../navigation/AuthProvider";
import styles from "./styles";

const PersonalData = ({ navigation }) => {
    
    const { age, setAge, gender, setGender, setFirstName, setLastName } =
        useContext(AuthContext);
    const [selectedFirstname, setSelectedFirstname] = useState("");
    const [selectedLastname, setSelectedLastname] = useState("");

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
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
                        <Text style={styles.signInDescription}>
                            SMS orqali kod yuborildi, agar kod yuborilmagan
                            bo'lsa, qayta yuborish tugmasini bosing.
                        </Text>
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
                            placeholder="Familiyangizni kiriting"
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
                            placeholder="Ismingizni kiriting"
                            placeholderTextColor="#B8B8BB"
                            onChangeText={(value) => setSelectedLastname(value)}
                            keyboardType="default"
                            // autoFocus={true}
                            maxLength={20}
                        />
                    </View>

                    <View style={{ ...styles.inputContainer, borderBottomWidth: 0 }}>
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
                            <Picker
                                style={{ height: "100%", width: 120 }}
                                selectedValue={gender}
                                onValueChange={(itemValue, itemIndex) => {
                                    setGender(itemValue);
                                }}
                            >
                                <Picker.Item label="Erkak" value="1" />
                                <Picker.Item label="Ayol" value="2" />
                            </Picker>
                        </View>
                    </View>

                    {/* State input ------------------------------------
                        <View
                            style={{
                                ...styles.inputContainer,
                            }}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>State</Text>
                            </View>
                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedState(itemValue);
                                }}
                            >
                                {states.states.map((value) => (
                                    <Picker.Item
                                        key={value.stateId}
                                        label={value.stateName}
                                        value={value.stateId}
                                    />
                                ))}
                            </Picker>
                        </View> */}

                    {/* Region input ------------------------------------------
                        <View
                            style={{
                                ...styles.inputContainer,
                            }}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Region</Text>
                            </View>
                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={selectedRegion}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedRegion(itemValue);
                                }}
                            >
                                {regions
                                    ? regions.regions.map((value) => (
                                          <Picker.Item
                                              key={value.regionId}
                                              label={value.regionName}
                                              value={value.regionId}
                                          />
                                      ))
                                    : []}
                            </Picker>
                        </View> */}

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
