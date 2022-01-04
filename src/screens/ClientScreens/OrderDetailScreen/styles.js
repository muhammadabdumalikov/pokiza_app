import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../../constants/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    containerAll: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
    },
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    contentStyle: {
        alignItems: "center",
    },
    sumLine: {
        width: "100%",
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderBottom: {
        paddingBottom: 5,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: .5
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
    orderIdText: {
        fontSize: 17,
        fontWeight: "bold",
    },
    orderStatus: {
        fontSize: 16,
    },
    orderStatusTxt: {
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: colors.lightPink,
        padding: 5,
        borderColor: colors.pink,
        borderWidth: 1,
        borderRadius: 5,
        color: colors.pink,
    },
    outOfTurn: {
        color: "black",
        fontWeight: "bold",
        fontSize: 14,
    },
    ordersList: {
        marginBottom: 16,
        borderRadius: 10,
    },
    orderBox: {
        height: height / 7.96,
        width: width / 1.09,
        borderRadius: 10,
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
        width: width / 1.09,
        height: height / 7.12,
        backgroundColor: "white",
        borderRadius: 10,
        // borderWidth: .2,
        overflow: "hidden",
        marginBottom: 8,
    },
    orderDetailTextContent: {
        width: width / 1.09 - width / 4.21,
        flexDirection: "row",
        paddingHorizontal: 24,
        paddingVertical: 10,
        height: "100%",
        justifyContent: "space-between",
    },
    orderDetailStatusContent: {
        justifyContent: "space-around",
    },
    hiddenContent: {
        maxHeight: height/3,
        width: "100%"
    },
    statusText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    status: {
        fontSize: 14,
        padding: 5,
        borderWidth: 1,
        borderColor: colors.blue,
        backgroundColor: colors.lightBlue,
        borderRadius: 5,
        color: colors.blue
    },
    orderDetailSizeContent: {
        justifyContent: "space-around",
    },
    sizeText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    size: {
        fontSize: 18,
        fontWeight: "bold",
    },
    priceText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    orderImage: {
        width: width / 4.21,
        height: "100%",
        backgroundColor: "gray",
    },
    emptyOrderView: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    emptyBox: {
        backgroundColor: colors.gray,
        height: 200,
        width: 200,
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
