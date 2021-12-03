import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

const CardComponent = ({item, navigation}) => {
    console.log(item)
    return (
        <TouchableOpacity
            style={styles.orderBox}
            onPress={() =>
                navigation.navigate("OrderDetailScreen", {
                    id: "ID: #329304",
                })
            }
        >
            <View style={styles.first}>
                <View style={styles.orderNumber}>
                    <Text style={styles.orderNumberStyle}>Buyurtma - {item.orderId}</Text>
                    <Text style={styles.orderNumberStyle}>#10293</Text>
                </View>
                <View style={styles.orderStatusWrapper}>
                    <Text style={styles.orderStatusText}>Buyurma holati</Text>
                    <Text style={styles.orderStatus}>Moderatorda</Text>
                </View>
            </View>

            <View style={styles.second}>
                <View style={styles.orderRegisterBox}>
                    <View style={styles.orderRegisterTextWrapper}>
                        <Feather name="calendar" size={18} color="black" />
                        <Text style={styles.orderRegisterText}>
                            Ro'yxatdan o'tgan sana
                        </Text>
                    </View>
                    <Text style={styles.orderRegisterDate}>18.11.2020</Text>
                </View>
                <View style={styles.orderRegisterBox}>
                    <View style={styles.orderRegisterTextWrapper}>
                        <Feather name="calendar" size={18} color="black" />
                        <Text style={styles.orderRegisterText}>
                            Olib ketilgan sana
                        </Text>
                    </View>
                    <Text style={styles.orderRegisterDate}>--.--.----</Text>
                </View>
                <View style={styles.orderRegisterBox}>
                    <View style={styles.orderRegisterTextWrapper}>
                        <Feather name="calendar" size={18} color="black" />
                        <Text style={styles.orderRegisterText}>
                            Qabul qilingan sana
                        </Text>
                    </View>
                    <Text style={styles.orderRegisterDate}>--.--.----</Text>
                </View>
            </View>

            <View style={styles.third}>
                <View style={styles.orderNumber}>
                    <Text style={styles.summText}>Umumiy summa:</Text>
                    <Text style={styles.orderSumm}>1 750 00 so'm</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CardComponent;
