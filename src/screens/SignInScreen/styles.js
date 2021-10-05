import { Dimensions, StyleSheet, SafeAreaView, Platform } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
// console.log(height, width);

export default StyleSheet.create({
    area: {
        flex: 1,
    },
    container: {
        width: width,
        paddingTop: Platform.OS === "android" ? statusBarHeight : 0,
    },
    logoBox: {
        height: height * 0.5,
        alignItems: "center",
        paddingHorizontal: 76,
        // backgroundColor: "#F5F5F5",
    },
    signIn: {
        width: 80,
        height: 32,
        fontWeight: "bold",
        fontSize: 24,
        color: "#007AFF",
        textAlign: "center",
        marginTop: 285,
        marginBottom: 12,
    },
    signInDescription: {
        width: 223,
        height: 32,
        fontSize: 12,
        textAlign: "center",
    },
});
