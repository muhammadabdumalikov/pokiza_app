import React from "react";
import { View, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler";

import {styles} from "./styles"

const NoticesScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.noticeBox}>
                <Text style={styles.statusText}>{"#342484"} carpet is <Text style={styles.statusTextColor}>{"washing"}</Text></Text>
                <Text style={styles.timeText}>{"1"} hours ago</Text>
            </View>
        </ScrollView>
    )
}

export default NoticesScreen;