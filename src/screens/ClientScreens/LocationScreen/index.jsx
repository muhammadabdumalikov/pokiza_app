import React from "react";
import { View, Text, ScrollView } from "react-native"

import {styles} from "./styles"

const LocationScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
           <Text style={styles.txt}>Bu sahifa tez orada ishga tushadi</Text>
        </ScrollView>
    )
}

export default LocationScreen;