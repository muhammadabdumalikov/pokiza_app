import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
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
        padding: 16,
        paddingBottom: 100,
        height: height
    },
    infoBox: {
        height: "50%",
        backgroundColor: "red",
        paddingBottom: 20,
        paddingTop: 20,
    },
    inputContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
    },
    tariffBox: {
        height: "25%",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        borderTopColor: "gray",
        borderTopWidth: 1,
        paddingBottom: 20,
        paddingTop: 20,
    },
    dateInfoBox: {
        height: "25%",
        paddingBottom: 20,
        paddingTop: 20,
    },
    sendCodeWrapper: {
        backgroundColor: "#2196F3",
        width: 344,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 30,
    },
    sendCodeText: {
        color: "#fff",
        fontSize: 17,
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
