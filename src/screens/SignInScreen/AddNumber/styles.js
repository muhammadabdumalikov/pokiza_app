import { Dimensions, StyleSheet,  Platform } from "react-native";
import Constants from "expo-constants";
import { colors } from "../../../constants/color";

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
    signInBox: {
        backgroundColor: "#fff",
        alignItems: "center",
        position: "relative",
        height: height*.55,
    },
    inputContainer: {
        position: "absolute",
        bottom: height / 3.25,
        marginTop: 5,
        marginBottom: 10,
        width: "100%",
        height: height / 7,
        borderBottomColor: "#ccc",
        borderRadius: 3,
        borderBottomWidth: 1,
        backgroundColor: "#fff",
        paddingLeft: 25
    },
    preTextWrapperStyle: {
        flex: 1,
        justifyContent: "center",
        width: "30%",
    },
    preText: {
        fontSize: 16,
        color: colors.gray
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: "#666",
        justifyContent: "center",
        alignItems: "center",
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    inputTxt: {
        fontSize: 16,
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
