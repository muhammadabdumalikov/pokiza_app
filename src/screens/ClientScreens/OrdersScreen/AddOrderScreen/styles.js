import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    containerWrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: width,
        height: "100%",
        backgroundColor: "#fff",
    },
    contentStyle: {
        padding: 16,
        paddingBottom: 100,
        height: height,
    },
    infoBox: {
        flex: 6,
        borderBottomColor: "gray",
        borderBottomWidth: 0.9,
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
    },
    inputContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
    },
    preTextWrapperStyle: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        width: width * 0.3,
    },
    preText: {
        fontSize: 16,
    },
    tariffBox: {
        flex: 2,
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        marginTop: 10,
        marginBottom: 10,
    },
    dateAddInfoWrapper: {
        marginBottom: 10,
    },
    dateAddInfo: {
        fontSize: 11,
    },
    attention: {
        color: "red",
        fontSize: 14,
    },
    dateInfoBox: {
        flex: 1,
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
    },
    sendCodeWrapper: {
        backgroundColor: "#2196F3",
        width: 344,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 30,
    },
    sendCodeText: {
        color: "#fff",
        fontSize: 17,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
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
    genderModalWrapper: {
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
        justifyContent: "center",
        alignItems: "center",
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
    },
    modalText: {
        textAlign: "center",
    },
    hideModalButton: {
        color: "white",
    },
    fab: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 28,
        left: 24,
        backgroundColor: "#2196F3",
    },
});

export default styles;
