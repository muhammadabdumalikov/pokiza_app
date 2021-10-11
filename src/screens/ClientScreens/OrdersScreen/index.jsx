import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

const OrderScreen = ({navigation}) => {
    return (
        // Orders with scrollable view ------------------------------------
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentStyle}
            showsVerticalScrollIndicator={false}
        >
            {/* Order box ---------------------------------------------------*/}
            <TouchableOpacity style={styles.orderBox} onPress={()=> navigation.navigate("OrderDetailScreen", {id: "ID: #329304"})}>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberStyle}>Last Order</Text>
                    <Text style={styles.orderNumberStyle}>#10293</Text>
                </View>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberAbout}>Last Order</Text>
                    <Text style={styles.orderNumberAbout}>#10293</Text>
                </View>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberAbout}>Last Order</Text>
                    <Text style={styles.orderNumberAbout}>#10293</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.orderBox}>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberStyle}>Last Order</Text>
                    <Text style={styles.orderNumberStyle}>#10293</Text>
                </View>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberAbout}>Last Order</Text>
                    <Text style={styles.orderNumberAbout}>#10293</Text>
                </View>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberAbout}>Last Order</Text>
                    <Text style={styles.orderNumberAbout}>#10293</Text>
                </View>
            </View>
            <View style={styles.orderBox}>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberStyle}>Last Order</Text>
                    <Text style={styles.orderNumberStyle}>#10293</Text>
                </View>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberAbout}>Last Order</Text>
                    <Text style={styles.orderNumberAbout}>#10293</Text>
                </View>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberAbout}>Last Order</Text>
                    <Text style={styles.orderNumberAbout}>#10293</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.fab}>
                <MaterialIcons name="add" size={32} color="white" />
            </TouchableOpacity>
        </ScrollView>
    );
};

export default OrderScreen;
