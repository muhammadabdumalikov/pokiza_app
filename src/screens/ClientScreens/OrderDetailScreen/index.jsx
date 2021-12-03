import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { CardComponent } from "./CardComponent";

const OrderDetailScreen = ({ navigation, route }) => {

    const DATA = [
        { id: "1", key: "1111" },
        { id: "2", key: "1111" },
        { id: "3", key: "1111" },
        { id: "4", key: "1111" },
    ];

    return (
        // Orders with scrollable view ------------------------------------
        <View style={styles.containerAll}>
            <View style={styles.sumLine}>
                <Text style={styles.orderIdText}>Buyurtma - 2</Text>
                <Text style={styles.orderIdText}>#102921</Text>
            </View>
            <View style={[styles.sumLine, styles.orderBottom]}>
                <Text style={styles.orderStatus}>Buyurtma holati</Text>
                <Text style={styles.orderStatusTxt}>Jarayonda</Text>
            </View>
            <View style={styles.sumLine}>
                <Text style={styles.sumText}>
                    Umumiy <Text style={styles.sumNum}>120.000</Text> so'm
                </Text>
                <Text style={styles.outOfTurn}>
                    Tariff: <Text style={styles.outOfTurn}>Tezkor</Text>
                </Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={({item})=> <CardComponent item={item}/>}
                keyExtractor={(item) => item.id}
                style={styles.container}
                contentContainerStyle={styles.contentStyle}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default OrderDetailScreen;
