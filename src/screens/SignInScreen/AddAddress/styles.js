import { Dimensions, StyleSheet,  Platform } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        flex: 1,
        height: "100%"
    },
    content: {
        // height: "100%",
        width: width,
        paddingTop: Platform.OS === "android" ? statusBarHeight : 0,
    },
    logoBox: {
        height: height*.45,
        alignItems: "center",
        paddingHorizontal: 76,
        backgroundColor: "#F5F5F5",
    },
    signIn: {
        top: height / 2.96,
        width: 80,
        height: 32,
        fontWeight: "bold",
        fontSize: 24,
        color: "#007AFF",
        textAlign: "center",
        marginBottom: 12,
    },
    signInDescription: {
        position: "absolute",
        top: height / 2.56,
        width: 223,
        height: 32,
        fontSize: 12,
        textAlign: "center",
    },
    
});
