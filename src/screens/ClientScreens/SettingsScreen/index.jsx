import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import {
    MaterialIcons,
    MaterialCommunityIcons,
    SimpleLineIcons,
    Feather,
} from "@expo/vector-icons";

import { styles } from "./styles";

const SettingsScreen = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.containerContent} showsVerticalScrollIndicator={false}>

            <View style={styles.settingsBox}>
                <TouchableOpacity style={styles.oneSettingBox}>
                    <Text style={styles.settingText}>Ma'lumotlarni o'zgartirish</Text>
                    <Feather name="edit" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.oneSettingBox}>
                    <Text style={styles.settingText}>Telefon raqamini o'zgartirish</Text>
                    <Feather name="smartphone" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.oneSettingBox}>
                <Text style={styles.settingText}>Manzilni o'zgartirish</Text>
                    <Feather name="map-pin" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.oneSettingBox}>
                <Text style={styles.settingText}>Tilni o'zgartirish</Text>
                    <Feather name="globe" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.oneSettingBox, marginTop: 25}}>
                    <Text style={styles.settingText}>Tizimdan chiqish</Text>
                    <Feather name="log-out" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.oneSettingBox}>
                <Text style={{ ...styles.settingText, color: "#E50000" }}>
                    Akkauntni o'chirish
                </Text>
                <Feather name="log-out" size={24} color="#E50000" />
            </TouchableOpacity>
            {/* About us button /////////////////////////////////////////////////////////////////// */}
            {/* <TouchableOpacity style={styles.aboutUsWrapper}>
                <Text style={styles.aboutUs}>About us</Text>
            </TouchableOpacity> */}
        </ScrollView>
    );
};

export default SettingsScreen;
