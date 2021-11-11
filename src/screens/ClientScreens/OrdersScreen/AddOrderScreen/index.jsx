import React from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const AddOrderScreen = ({navigation}) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentStyle}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.inputContainer}>
                <Text>1</Text>
                <TextInput />
            </View>
            <View style={styles.inputContainer}>
                <Text>1</Text>
                <TextInput />
            </View>
            <View style={styles.inputContainer}>
                <Text>1</Text>
                <TextInput />
            </View>
            <View style={styles.inputContainer}>
                <Text>1</Text>
                <TextInput />
            </View>
            <View style={styles.inputContainer}>
                <Text>1</Text>
                <TextInput />
            </View>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </ScrollView>
    );
};

export default AddOrderScreen;
