import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { AuthContext } from "../../../navigation/AuthProvider";
import styles from "./styles";
import { request } from "../../../helpers/request";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const PersonalData = ({ navigation }) => {
    const { age, setAge, gender, setGender } = useContext(AuthContext);
    const [selectedFirstname, setSelectedFirstname] = useState("");
    const [selectedLastname, setSelectedLastname] = useState("");
    const [selectedGender, setSelectedGender] = useState("male")
    let firstname;
    let lastname;

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.logoBox}>
                <Text style={styles.signIn}>Sign In</Text>
                <Text style={styles.signInDescription}>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure
                </Text>
            </View>
            <View style={styles.personalDataBox}>
                {/* Name input ------------------------------------ */}
                <View
                    style={{ ...styles.inputContainer, bottom: height / 2.58 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Name</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        numberOfLines={1}
                        placeholder="Enter first name"
                        placeholderTextColor="#B8B8BB"
                        onChangeText={(value) => setSelectedFirstname(value)}
                        keyboardType="default"
                        // autoFocus={true}
                        maxLength={20}
                    />
                </View>

                {/* Surname input ------------------------------------------ */}
                <View
                    style={{ ...styles.inputContainer, bottom: height / 3.16 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Surname</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        numberOfLines={1}
                        placeholder="Enter last name"
                        placeholderTextColor="#B8B8BB"
                        onChangeText={(value) => (setSelectedLastname(value))}
                        keyboardType="default"
                        // autoFocus={true}
                        maxLength={20}
                    />
                </View>

                {/* Age input ----------------------------------------------- */}
                <View
                    style={{
                        ...styles.inputContainer,
                        bottom: height / 4.07,
                        right: width * 0.52,
                        width: "48%",
                    }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Age</Text>
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
                        bottom: height / 4.07,
                        left: width * 0.52,
                        width: "48%",
                    }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.preTextWrapperStyle}>
                        <Text style={styles.preText}>Gender</Text>
                    </View>
                    <Picker
                        style={{ height: 50, width: 120 }}
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) => {
                            setGender(itemValue);
                        }}
                    >
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
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
                            navigation.navigate("AddAddress");
                        }
                    }}
                >
                    <Text style={styles.sendCodeText}>Send code</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default PersonalData;
