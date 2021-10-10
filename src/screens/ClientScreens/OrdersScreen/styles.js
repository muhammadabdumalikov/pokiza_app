import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: "100%"
    },
    contentStyle: {
        alignItems: "center",
        padding: 16,
        height: "100%"
    },
    orderBox: {
        height: height / 6.94,
        width: width / 1.09,
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderWidth : .1,
        borderRadius: 2,
        justifyContent: "space-between",
        marginBottom: 16,
        backgroundColor: "white"
    },
    orderNumber: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    orderNumberStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    orderNumberAbout: {
        fontSize: 12
    },
    fab: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 28,
        right: 24,
        backgroundColor: "#007AFF"
    }
});
