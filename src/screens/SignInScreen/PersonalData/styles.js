import { Dimensions, StyleSheet,  Platform } from "react-native";
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
    personalDataBox: {
        backgroundColor: "white",
        alignItems: "center",
        position: "relative",
        height: height * 0.55,
    },
    inputContainer: {
        position: "absolute",
        marginTop: 5,
        marginBottom: 10,
        width: "100%",
        height: height / 15,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        borderRadius: 3,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    preTextWrapperStyle: {
        padding: 10,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: width * .3,
    },
    preText: {
        fontSize: 16,
    },
    input: {
        width: "100%",
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
});
