import { Dimensions, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

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
    },
    logoBox: {
        height: height * 0.45,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        paddingVertical: 25,
    },
    logo: {
        width: "100%",
        height: 60,
        marginTop: 80,
    },
    signInWrapper: {
        alignItems: "center",
    },
    signIn: {
        width: "100%",
        height: 32,
        fontWeight: "bold",
        fontSize: 24,
        color: "#007AFF",
        textAlign: "center",
        marginBottom: 12,
    },
    signInDescription: {
        width: 223,
        height: 32,
        fontSize: 12,
        textAlign: "center",
    },
    personalDataBox: {
        height: height * 0.55,
        justifyContent: "space-between",
        paddingVertical: 15,
    },
    infoWrapper: {
        alignItems: "center",
    },
    inputContainer: {
        marginTop: 5,
        marginBottom: 5,
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
        paddingLeft: 24,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.4,
    },
    preText: {
        fontSize: 16,
        width: "100%",
    },
    pickerStyle: {
        height: 50,
        width: "35%",
    },
    input: {
        width: "100%",
        paddingLeft: 24,
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalWrapper: {
        width: "70%",
        height: "30%",
        shadowColor: "#000",
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor: "white",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: "hidden",
        marginBottom: 10,
    },
    tariffModalWrapper: {
        height: "15%",
    },
    contenModalView: {
        flex: 1,
        height: "100%",
    },
    modalView: {
        padding: 16,
        alignItems: "center",
    },
    buttonOpen: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        height: 30,
        width: "33%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        elevation: 2,
    },
    textStyle: {
        color: "gray",
        textAlign: "center",
        marginRight: 16,
    },
    modalText: {
        textAlign: "center",
    },
    hideModalButton: {
        color: "white",
    },
    sendCodeWrapper: {
        backgroundColor: "#007AFF",
        width: 344,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 30,
    },
    sendCodeText: {
        color: "#fff",
        fontSize: 17,
    },
});
