import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

console.log(height)

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: height < 550 ? 550 : "100%",
        backgroundColor: "#fff"
    },
    containerContent: {
        height: height < 600 ? 500 : "100%",
        backgroundColor: "#fff"
    },
    settingsBox: {
        width: width / 1.09,
        marginBottom: 16
    },
    oneSettingBox: {
        height: height < 600 ? 45 : height/ 15.92,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F4F4F5",
        // backgroundColor: "#F4F4F5",
        // borderBottomWidth: .1,
        // borderBottomColor: "#D5D5D5",
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
    }
});
