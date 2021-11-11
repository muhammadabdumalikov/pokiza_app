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

const AddOrderScreen = ({ navigation }) => {
    return (
        <View style={styles.containerWrapper}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentStyle}
                showsVerticalScrollIndicator={false}
            >
                <View styles={styles.informationBox}>
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
                </View>

                <View style={styles.tariffBox}>
                    <View style={styles.inputContainer}>
                        <Text>1</Text>
                        <TextInput />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>1</Text>
                        <TextInput />
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default AddOrderScreen;
