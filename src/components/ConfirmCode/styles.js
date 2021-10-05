import { Dimensions, StyleSheet, } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    root: {
        height: height * 0.5,
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
