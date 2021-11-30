import React, { useState } from "react";
import { View, TouchableOpacity, Text, ImageBackground, Pressable } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "../../../constants/color";

const EditLanguage = ({ navigation }) => {
    const [language, setLanguage] = useState();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tilni o'zgartirish</Text>

            <Pressable
                style={styles.flagLine}
                onPress={() => setLanguage("uzbek")}
            >
                <View style={styles.flagTextWrapper}>
                    <ImageBackground
                        style={{ width: 30, height: 30 }}
                        resizeMode="cover"
                        source={require("../../../../assets/uzbekistan.png")}
                    />
                    <Text style={styles.flagText}>O'zbek tili</Text>
                </View>
                {language == "uzbek" ? (
                    <Feather name="check" size={24} color={colors.blue} />
                ) : null}
            </Pressable>

            <Pressable
                style={styles.flagLine}
                onPress={() => setLanguage("russian")}
            >
                <View style={styles.flagTextWrapper}>
                    <ImageBackground
                        style={{ width: 30, height: 30 }}
                        resizeMode="cover"
                        source={require("../../../../assets/russia.png")}
                    />
                    <Text style={styles.flagText}>Русский язык</Text>
                </View>
                {language == "russian" ? (
                    <Feather name="check" size={24} color={colors.blue} />
                ) : null}
            </Pressable>

            <Pressable
                style={styles.flagLine}
                onPress={() => setLanguage("english")}
            >
                <View style={styles.flagTextWrapper}>
                    <ImageBackground
                        style={{ width: 30, height: 30 }}
                        resizeMode="cover"
                        source={require("../../../../assets/united-kingdom.png")}
                    />
                    <Text style={styles.flagText}>English language</Text>
                </View>
                {language == "english" ? (
                    <Feather name="check" size={24} color={colors.blue} />
                ) : null}
            </Pressable>

            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default EditLanguage;
