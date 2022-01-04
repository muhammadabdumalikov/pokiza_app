import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants/color";
import Constants from "expo-constants";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    content: {
        // width: width,
        paddingBottom: 100,
    },
    containerContent: {
        height: height < 600 ? 450 : "100%",
        // backgroundColor: "#fff"
        justifyContent: "space-between",
    },
    settingsBox: {
        width: "100%",
        marginBottom: 16,
    },
    oneSettingBox: {
        height: height < 600 ? 45 : height / 15.92,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F4F4F5",
        borderRadius: 10,
        marginBottom: 5,
    },
    settingText: {
        fontSize: height < 600 ? 18 : 16,
    },
    aboutUsWrapper: {
        position: "absolute",
        bottom: 48,
        left: 16,
    },
    aboutUs: {
        fontSize: 16,
        fontWeight: "bold",
        textDecorationLine: "underline",
        color: "#007AFF",
    },
    title: {
        fontSize: 20,
        marginBottom: 16,
    },
    inputContainer: {
        width: "100%",
        height: height / 12,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        borderRadius: 3,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between",
    },
    preTextWrapperStyle: {
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        width: width * 0.3,
    },
    preText: {
        fontSize: 16,
    },
    confirmEditInfoBtn: {
        width: 105,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        marginTop: 20,
        backgroundColor: colors.blue,
        borderRadius: 5,
    },
    confirmEditInfoChanged: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    confirmPhoneChangedBtn: {
        width: 100,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue,
        borderRadius: 5,
    },
    phoneLine: {
        marginBottom: 16,
    },
    confirmPhoneChanged: {
        fontSize: 14,
        color: "white",
    },
    infoWrapper: {
        alignItems: "center",
    },
    pickerStyle: {
        height: 50,
        width: "40%",
    },
    flagLine: {
        width: "100%",
        height: height / 12,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between",
    },
    flagTextWrapper: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    flagText: {
        marginLeft: 10
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
        marginRight: 16
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
