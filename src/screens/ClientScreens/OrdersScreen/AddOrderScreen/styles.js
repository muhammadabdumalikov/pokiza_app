import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        backgroundColor: "red"

    },
    contentContainer: {

    },
    inputContainer: {
        flex: 1
    }
})

export default styles
