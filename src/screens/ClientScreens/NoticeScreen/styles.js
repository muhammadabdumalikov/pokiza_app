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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
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
