import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    personalDataBox: {
        backgroundColor: "#000",
        alignItems: "center",
        position: "relative",
        height: height * 0.55
    },
    inputContainer: {
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
        justifyContent: "space-between",
    },
    preTextWrapperStyle: {
        padding: 10,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.3,
    },
    preText: {
        fontSize: 16,
    },
    pickerStyle: {
        height: 50,
        width: "30%",
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
        bottom: height / 12.53,
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
