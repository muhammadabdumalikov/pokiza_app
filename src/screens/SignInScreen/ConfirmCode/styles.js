import { Dimensions, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "white",

    },
    content: {
        // height: "100%",
        width: width,
        paddingTop: Platform.OS === "android" ? statusBarHeight : 0,
    },
    logoBox: {
        height: height * 0.45,
        alignItems: "center",
        paddingHorizontal: 76,
        backgroundColor: "#F5F5F5",
    },
    signIn: {
        top: height / 2.96,
        width: "100%",
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
    root: {
        height: height * 0.55,
        width: "100%",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
    },
    codeFiledRoot: {
        position: "absolute",
        bottom: height / 3.47,
        justifyContent: "space-between",
        width: 208,
    },
    cell: {
        width: 40,
        height: 60,
        lineHeight: 50,
        fontSize: 24,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#00000030",
        textAlign: "center",
    },
    focusCell: {
        borderColor: "#000",
    },
    forgotPass: {
        textDecorationLine: "underline",
        width: "100%",
        textAlign: "center",
        color: "#007AFF",
        fontSize: 12,
        marginTop: 30
    },
    sendCodeWrapper: {
        position: "absolute",
        bottom: height / 14,
        backgroundColor: "#007AFF",
        width: 344,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    sendCodeText: {
        color: "#fff",
        fontSize: 17,
    },
});
