import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    txt: {
        color: "#1976D2"
    }
});
