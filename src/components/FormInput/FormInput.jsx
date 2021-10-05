import React from "react";
import { View, TextInput, Text } from "react-native";

import { AntDesign, MaterialIcons } from "react-native-vector-icons";

import styles from "./styles";

const FormInput = ({ labelValue, placeholderText, preText, ...rest }) => {
    return (
        <View
            style={styles.inputContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.preTextWrapperStyle}>
                <Text style={styles.preText}>{preText}</Text>
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#B8B8BB"
                {...rest}
            />
        </View>
    );
};

export default FormInput;
