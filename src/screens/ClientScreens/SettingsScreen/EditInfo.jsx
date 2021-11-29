import React, {useContext} from "react";
import {
    View,
    Text,
    TextInput,
} from "react-native";
import { AuthContext } from "../../../navigation/AuthProvider";
import { Picker } from "@react-native-picker/picker";

import { styles } from "./styles";

const EditInfo = () => {
    const { age, setAge, gender, setGender } =
        useContext(AuthContext);
    return (
        <View>
            <Text>Ma'lumotlarni o'zgartirish</Text>
            <View style={styles.inputContainer}>
                <Text>Ism</Text>
                <TextInput placeholder="Ismingizni kiriting" />
            </View>
            <View style={styles.inputContainer}>
                <Text>Ism</Text>
                <TextInput placeholder="Ismingizni kiriting" />
            </View>
            <View style={styles.inputContainer }>
                {/* Age input ----------------------------------------------- */}
                <View
                    style={{
                        ...styles.inputContainer,
                        borderBottomWidth: 0,
                        width: "48%",
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
                        borderBottomWidth: 0,
                        width: "48%",
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
        </View>
    );
};

export default EditInfo;
