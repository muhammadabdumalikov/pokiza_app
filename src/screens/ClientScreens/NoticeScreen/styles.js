import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: "100%",
        backgroundColor: "#fff",
    },
    contentStyle: {
        alignItems: "center",
        padding: 16,
    },
    noticeBox: {
        width: width / 1.09,
        minHeight: 100,
        marginBottom: 30,
        backgroundColor: "#F4F4F5",
        borderRadius: 10,
        overflow: "hidden",
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    noticeTxtTitle: {
        fontSize: 16,
        fontWeight: "bold",
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
        fontWeight: "bold",
    },
    noticeTxt: {},
    photo: {
        width: "100%",
        height: 150,
    },
    textStyle: {
        flex: 1,
    },
    toggleText: {
        color: "#3742fa",
        fontWeight: "bold",
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
