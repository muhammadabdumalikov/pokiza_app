import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        height: "100%",
        backgroundColor: "#fff"
    },
    containerContent: {
        height: height < 600 ? 450 : "100%",
        // backgroundColor: "#fff"
        justifyContent: "space-between"
    },
    settingsBox: {
        width: "100%",
        marginBottom: 16
    },
    oneSettingBox: {
        height: height < 600 ? 45 : height/ 15.92,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F4F4F5",
        borderRadius: 10,
        marginBottom:5
    },
    settingText: {
        fontSize: height < 600 ? 18 : 16
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
        color: "#007AFF"
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
    confirmPhoneChangedBtn: {
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        marginTop: 20
    },
    confirmPhoneChanged: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        backgroundColor: colors.blue,
        borderRadius: 5,
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    }
});
