import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: "100%",
        // backgroundColor: "#fff"
    },
    settingsBox: {
        width: width / 1.09,
        marginBottom: 16
    },
    oneSettingBox: {
        height: 51,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        // backgroundColor: "#F4F4F5",
        // borderBottomWidth: .1,
        // borderBottomColor: "#D5D5D5",
        borderRadius: 10,
        marginBottom:1
    },
    settingText: {
        fontSize: 16
    },
    aboutUsWrapper: {
        position: "absolute",
        bottom: 48,
        left: 32,
    },
    aboutUs: {
        fontSize: 16,
        fontWeight: "bold",
        textDecorationLine: "underline",
        color: "#007AFF"
    }
});
