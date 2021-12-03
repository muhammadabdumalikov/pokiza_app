import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

const CardComponent = ({ item, navigation }) => {
    const statusStyles = {
        1: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "white",
                color: "black",
            },
            text: "Moderator",
        },
        2: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "white",
                color: "gray",
            },
            text: "Kutilmoqda",
        },
        3: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#7B1FA2",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#E1BEE7",
                color: "#7B1FA2",
            },
            text: "Biriktirilgan",
        },
        4: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#B0B2B2",
                color: "black",
            },
            text: "Haydovchida",
        },
        5: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#6A5E12",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#F6E04C",
                color: "#6A5E12",
            },
            text: "Jarayonda",
        },
        6: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#4D9950",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#C8E6C9",
                color: "#4D9950",
            },
            text: "Tayyor",
        },
        7: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#455A64",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#CFD8DC",
                color: "#455A64",
            },
            text: "Yuklangan",
        },
        8: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#455A64",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#CFD8DC",
                color: "#455A64",
            },
            text: "Yetkazib berishda",
        },
        9: {
            style: {
                fontSize: 14,
                textAlign: "center",
                textAlignVertical: "center",
                padding: 5,
                borderColor: "#244726",
                borderWidth: 1,
                borderRadius: 5,
                backgroundColor: "#388E3C",
                color: "white",
            },
            text: "Yetkazilgan",
        },
    };
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
                    <Text style={styles.orderNumberStyle}>
                        Buyurtma - {item.orderId}
                    </Text>
                    <Text style={styles.orderNumberStyle}>#10293</Text>
                </View>
                <View style={styles.orderStatusWrapper}>
                    <Text style={styles.orderStatusText}>Buyurma holati</Text>
                    <Text style={statusStyles[item.orderStatus].style}>
                        {statusStyles[item.orderStatus].text}
                    </Text>
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
