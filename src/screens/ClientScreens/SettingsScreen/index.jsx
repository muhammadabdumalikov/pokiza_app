import React, { useContext } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
    Linking,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../navigation/AuthProvider";

import { styles } from "./styles";

const SettingsScreen = ({ navigation }) => {
    const { setUser } = useContext(AuthContext);
    const confirmDeleteAccount = () =>
        Alert.alert(
            "Akkaunt o'chirilishi uchun operator bilan bog'laning",
            "",
            [
                {
                    text: "(97) 501-22-22",
                    onPress: () => Linking.openURL(`tel:${975012222}`),
                },
                {
                    text: "1221",
                    onPress: () => Linking.openURL(`tel:${1221}`),
                },
            ],
            { cancelable: true }
        );

    const confirmExitAccount = () =>
        Alert.alert(
            "Tizimdan chiqishni xohlaysizmi?",
            "",
            [
                {
                    text: "yo'q",
                    onPress: () => null,
                    style: "cancel",
                },
                {
                    text: "ha, xohlayman",
                    onPress: async () => {
                        let keys = [];
                        keys = await AsyncStorage.getAllKeys();
                        await AsyncStorage.multiRemove(keys);
                        navigation.navigate("Auth", {screen: "SignInScreen  "});
                    },
                    style: "destructive",
                },
            ],
            { cancelable: true }
        );
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerContent}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.settingsBox}>
                <TouchableOpacity
                    style={styles.oneSettingBox}
                    onPress={() => navigation.navigate("EditInfo")}
                >
                    <Text style={styles.settingText}>
                        Ma'lumotlarni o'zgartirish
                    </Text>
                    <Feather name="edit" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.oneSettingBox}
                    onPress={() => navigation.navigate("EditPhoneNumber")}
                >
                    <Text style={styles.settingText}>
                        Telefon raqamini o'zgartirish
                    </Text>
                    <Feather name="smartphone" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.oneSettingBox}
                    onPress={() => navigation.navigate("EditLocation")}
                >
                    <Text style={styles.settingText}>
                        Manzilni o'zgartirish
                    </Text>
                    <Feather name="map-pin" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.oneSettingBox}
                    onPress={() => navigation.navigate("EditLanguage")}
                >
                    <Text style={styles.settingText}>Tilni o'zgartirish</Text>
                    <Feather name="globe" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...styles.oneSettingBox, marginTop: 25 }}
                    onPress={confirmExitAccount}
                >
                    <Text style={styles.settingText}>Tizimdan chiqish</Text>
                    <Feather name="log-out" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.oneSettingBox}
                onPress={confirmDeleteAccount}
            >
                <Text style={{ ...styles.settingText, color: "#E50000" }}>
                    Akkauntni o'chirish
                </Text>
                <Feather name="trash-2" size={24} color="#E50000" />
            </TouchableOpacity>
            {/* About us button /////////////////////////////////////////////////////////////////// */}
            {/* <TouchableOpacity style={styles.aboutUsWrapper}>
                <Text style={styles.aboutUs}>About us</Text>
            </TouchableOpacity> */}
        </ScrollView>
    );
};

export default SettingsScreen;
