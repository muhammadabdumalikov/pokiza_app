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
    },
    informationBox: {
        flex: 2,
        backgroundColor: "red",
    },
    inputContainer: {
        height: 100,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
    },
    tariffBox: {
        flex: 1,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        borderTopColor: "gray",
        borderTopWidth:1,
        paddingBottom: 20,
        paddingTop: 20
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
