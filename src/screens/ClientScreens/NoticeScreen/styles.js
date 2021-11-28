import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: "100%",
        backgroundColor: "#fff",
    },
    noticeBox: {
        width: width / 1.09,
        minHeight: 100,
        backgroundColor: "#F4F4F5",
        borderRadius: 10,
        overflow: "hidden",
        padding: 16,
    },
    noticeTxtTitle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    logoLine: {
        flexDirection: "row",
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoImg: {
        height: "80%",
        width: "25%",
    },
    logoDate: {
        fontSize: 14,
        fontWeight: "bold"
    },
    noticeTxt: {
    },
    photo: {
        width: "100%",
        height: 150
    },
    textStyle: {
        flex: 1,
    },
    toggleText: {
        color: "#3742fa",
        fontWeight: "bold"
    },
    statusText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    statusTextColor: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFA000",
    },
    timeText: {
        fontSize: 12,
    },
});
