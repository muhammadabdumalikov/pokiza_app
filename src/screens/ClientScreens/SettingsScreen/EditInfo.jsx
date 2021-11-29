import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../../../navigation/AuthProvider";
import { Picker } from "@react-native-picker/picker";

import { styles } from "./styles";

const EditInfo = () => {
    const { age, setAge, gender, setGender } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, marginBottom: 15}}>Ma'lumotlarni o'zgartirish</Text>

            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.preText}>Familiya</Text>
                    <TextInput
                        style={styles.preText}
                        placeholder="Familiyangizni kiriting"
                        placeholderTextColor="#B8B8BB"
                        maxLength={20}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.preText}>Ism</Text>
                    <TextInput
                        style={styles.preText}
                        placeholder="Ismingizni kiriting"
                        placeholderTextColor="#B8B8BB"
                        maxLength={20}
                    />
                </View>
                <View
                    style={{ ...styles.inputContainer, borderBottomWidth: 0 }}
                >
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
                <TouchableOpacity style={styles.confirmPhoneChangedBtn}><Text style={styles.confirmPhoneChanged}>Tasdiqlash</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default EditInfo;
