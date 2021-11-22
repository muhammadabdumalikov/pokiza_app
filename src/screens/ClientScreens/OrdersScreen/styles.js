import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants/color";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    containerWrapper: {
        flex: 1,
    },
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
    orderBox: {
        height: height / 3.3,
        width: width / 1.09,
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: "space-between",
        marginBottom: 16,
        backgroundColor: "#F4F4F5",
        overflow: "hidden",
    },
    first: {
        flex: 4,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    second: {
        flex: 5,
        paddingVertical: 10,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
    },
    third: {
        flex: 2,
    },
    orderNumber: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderStatusWrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderNumberStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    orderStatusText: {
        fontSize: 16,
    },
    orderStatus: {
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        padding: 5,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
    },
    orderRegisterBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderRegisterTextWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    orderRegisterText: {
        fontSize: 14,
        marginLeft: 5,
    },
    orderRegisterDate: {
        fontSize: 14,
    },
    summText: {
        fontSize: 14,
    },
    orderSumm: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.blue,
    },
    fab: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 28,
        right: 24,
        backgroundColor: "#007AFF",
    },
});
