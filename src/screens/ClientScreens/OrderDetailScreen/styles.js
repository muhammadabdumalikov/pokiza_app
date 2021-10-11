import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: "100%",
    },
    contentStyle: {
        alignItems: "center",
        padding: 16,
        height: "100%",
    },
    sumLine: {
        width: width / 1.09,
        height: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 23,
    },
    sumText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },
    sumNum: {
        fontSize: 18,
        color: "#007AFF",
        fontWeight: "bold",
    },
    outOfTurn: {
        color: "#E50000",
        fontWeight: "bold",
        fontSize: 18,
    },
    ordersList: {},
    orderBox: {
        height: height / 7.96,
        width: width / 1.09,
        borderRadius: 5,
        justifyContent: "space-around",
        marginBottom: 16,
        backgroundColor: "white",
        overflow: "hidden",
    },
    orderBoxContent: {
        paddingHorizontal: 24,
        paddingVertical: 14,
        height: "100%",
        justifyContent: "space-around",
    },
    orderNumber: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    orderNumberStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    productNameStyle: {
        color: "#007AFF",
    },
    finishedProduct: {
        color: "#3DA700",
        fontWeight: "bold",
        fontSize: 18,
    },
    orderDetailBox: {
        flexDirection: "row",
        height: height / 9.12,
        backgroundColor: "white",
        borderRadius: 5,
        overflow: "hidden"
    },
    orderDetailTextContent: {
        width: width / 1.09 - 89,
        flexDirection: "row",
        paddingHorizontal: 24,
        paddingVertical: 14,
        height: "100%",
        justifyContent: "space-between",
    },
    orderDetailStatusContent: {
        justifyContent: "space-around",
    },
    statusText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    status: {
        fontSize: 18,
        fontWeight: "bold"
    },
    orderDetailSizeContent: {
        justifyContent: "space-around",
    },
    sizeText: {
        fontSize: 14,
        fontWeight: "bold"
    },
    size: {
        fontSize: 18,
        fontWeight: "bold"
    },
    orderImage: {
        width: 89,
        height: "100%",
        backgroundColor: "gray"
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
        backgroundColor: "#007AFF",
    },
});
