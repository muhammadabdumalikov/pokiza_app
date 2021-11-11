import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: "100%",
        backgroundColor: "#fff",
    },
    contentStyle: {
        alignItems: "center",
        padding: 16,
        height: "100%",
    },
    inputContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: .9,
        borderBottomColor: "gray"
    },
    orderBox: {
        height: height / 6.94,
        width: width / 1.09,
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 10,
        justifyContent: "space-between",
        marginBottom: 16,
        backgroundColor: "#F4F4F5",
        overflow: "hidden",
    },
    orderNumber: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    orderNumberStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    orderNumberAbout: {
        fontSize: 12,
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

export default styles;
