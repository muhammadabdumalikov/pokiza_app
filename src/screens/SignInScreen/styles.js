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
    signInBox: {
        backgroundColor: "#fff",
        alignItems: "center",
        position: "relative",
        height: height * 0.5,
        // backgroundColor: "red",
    },
    input: {
        width: "100%",
    },
    inputContainer: {
        position: "absolute",
        bottom: height / 3.25,
        marginTop: 5,
        marginBottom: 10,
        width: "100%",
        height: height / 15,
        borderBottomColor: "#ccc",
        borderRadius: 3,
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    preTextWrapperStyle: {
        padding: 10,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
    },
    preText: {
        fontSize: 16,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: "#666",
        justifyContent: "center",
        alignItems: "center",
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: height / 1.5,
        height: height / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    forgotPassWrapper: {
        width: 105,
        position: "absolute",
        bottom: height / 3.87,
        right: width / 16.3,
    },
    forgotPass: {
        textDecorationLine: "underline",
        width: "100%",
        textAlign: "center",
        color: "#007AFF",
        fontSize: 12,
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
    root: {
        height: height * .5,
        width: "100%",
        alignItems: "center",
        position: "relative",
        justifyContent: "center"
    },
    codeFiledRoot: {
        position: "absolute",
        bottom: height /3.47,
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
    resend: {
        // justifyContent: "center",
        // alignItems: "center"
    }
});
