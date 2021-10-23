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

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


const PersonalData = ({ navigation }) => {
    const { setFirstName, setLastName, setAge, setGender } =
        useContext(AuthContext);
    let [selectedAge, setSelectedAge] = useState("");
    let [selectedGender, setSelectedGender] = useState();
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
                        onChangeText={(value) => (firstname = value)}
                        keyboardType="default"
                        // autoFocus={true}
                        maxLength={9}
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
                        onChangeText={(value) => (lastname = value)}
                        keyboardType="default"
                        // autoFocus={true}
                        maxLength={9}
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
                    <Picker
                        style={{ height: 50, width: 120 }}
                        selectedValue={selectedAge}
                        onValueChange={(itemValue, itemIndex) => {
                            console.log(selectedAge);
                            setSelectedAge(itemValue);
                        }}
                    >
                        <Picker.Item label="18" value="18" />
                        <Picker.Item label="20" value="20" />
                    </Picker>
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
                        selectedValue={selectedGender}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedGender(itemValue);
                        }}
                    >
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                </View>

                <TouchableOpacity
                    style={styles.sendCodeWrapper}
                    onPress={() => {
                        setAge(selectedAge);
                        setGender(selectedGender);
                        setFirstName(firstname);
                        setLastName(lastname);
                    }}
                >
                    <Text style={styles.sendCodeText}>Send code</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default PersonalData;
