import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
    MaterialIcons,
    MaterialCommunityIcons,
    SimpleLineIcons,
    Feather,
} from "@expo/vector-icons";

import { styles } from "./styles";

const SettingsScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.settingsBox}>
                <TouchableOpacity style={styles.oneSettingBox}>
                    <Text style={styles.settingText}>Change Name</Text>
                    <Feather name="edit" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.oneSettingBox}>
                    <Text style={styles.settingText}>Change Phone Number</Text>
                    <Feather name="smartphone" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.oneSettingBox}>
                    <Text style={styles.settingText}>Change Password</Text>
                    <Feather name="lock" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.oneSettingBox}>
                    <Text style={styles.settingText}>Change Location</Text>
                    <Feather name="map-pin" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.oneSettingBox}>
                    <Text style={styles.settingText}>Change Lanuage</Text>
                    <Feather name="globe" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.oneSettingBox}>
                    <Text style={styles.settingText}>Contact with Support</Text>
                    <Feather name="help-circle" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.oneSettingBox}>
                <Text style={{ ...styles.settingText, color: "#E50000" }}>
                    Exit Account
                </Text>
                <Feather name="log-out" size={24} color="#E50000" />
            </TouchableOpacity>
            {/* About us button /////////////////////////////////////////////////////////////////// */}
            <TouchableOpacity style={styles.aboutUsWrapper}>
                <Text style={styles.aboutUs}>About us</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;
