import { Dimensions, StyleSheet, SafeAreaView } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        width: width,
        backgroundColor: "red",
    },
    logoBox: {
        height: height * .5,
        alignItems: "center",
        paddingHorizontal: 76,
        backgroundColor: "#F5F5F5",
        
    },
    signIn: {
        width: 80,
        height: 32,
        fontWeight: "bold",
        fontSize: 24,
        color: "#007AFF",
        textAlign: "center"
    },
    signInDescription: {
        width: 223,
        height: 32,
        fontSize: 12,
        textAlign: "center"
    },
    signInBox: {
        backgroundColor: "#fff",
        alignItems: "center",
        position: "relative",
        height: height * .5,
        backgroundColor: "red"
    },
    forgotPassWrapper: {
       width: 105
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
        top: 250,
        backgroundColor: "#007AFF",
        width: 344,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    sendCodeText: {
        color: "#fff",
        fontSize: 17
    }
});
