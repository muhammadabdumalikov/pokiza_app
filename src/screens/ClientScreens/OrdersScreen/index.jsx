import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Pressable, Touchable } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { useLazyQuery, gql, useQuery } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { request } from "../../../helpers/request";
import { colors } from "../../../constants/color";

const GET_ORDERS = gql`
    query Orders {
        orders {
            orderId
            orderCreatedAt
            orderDeliveryTime
        }
    }
`;

const OrderScreen = ({ navigation }) => {
    // const [getOrders, {data, loading, error}] = useLazyQuery(GET_ORDERS);
    // const [data, setData] = useState()

    // useEffect(() => {
    //     async function fetchData() {
    //         const token = await AsyncStorage.getItem('user_token');
    //         // const fetchedData = await request(GET_ORDERS, null, token)
    //         // console.log(fetchedData)
    //     }

    //     fetchData()
    // }, []);

    // useEffect(() => {
    //     getOrders();
    // }, [])

    // useEffect(() => {
    //     console.log(data, error);
    // }, [data]);

    let orders = true;

    return (
        // Orders with scrollable view ------------------------------------
        <View style={styles.containerWrapper}>
            {orders ? (
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentStyle}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Order box ---------------------------------------------------*/}
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
                                    Buyurtma - {1}
                                </Text>
                                <Text style={styles.orderNumberStyle}>
                                    #10293
                                </Text>
                            </View>
                            <View style={styles.orderStatusWrapper}>
                                <Text style={styles.orderStatusText}>
                                    Buyurma holati
                                </Text>
                                <Text style={styles.orderStatus}>
                                    Moderatorda
                                </Text>
                            </View>
                        </View>

                        <View style={styles.second}>
                            <View style={styles.orderRegisterBox}>
                                <View style={styles.orderRegisterTextWrapper}>
                                    <Feather
                                        name="calendar"
                                        size={18}
                                        color="black"
                                    />
                                    <Text style={styles.orderRegisterText}>
                                        Ro'yxatdan o'tgan sana
                                    </Text>
                                </View>
                                <Text style={styles.orderRegisterDate}>
                                    18.11.2020
                                </Text>
                            </View>
                            <View style={styles.orderRegisterBox}>
                                <View style={styles.orderRegisterTextWrapper}>
                                    <Feather
                                        name="calendar"
                                        size={18}
                                        color="black"
                                    />
                                    <Text style={styles.orderRegisterText}>
                                        Olib ketilgan sana
                                    </Text>
                                </View>
                                <Text style={styles.orderRegisterDate}>
                                    --.--.----
                                </Text>
                            </View>
                            <View style={styles.orderRegisterBox}>
                                <View style={styles.orderRegisterTextWrapper}>
                                    <Feather
                                        name="calendar"
                                        size={18}
                                        color="black"
                                    />
                                    <Text style={styles.orderRegisterText}>
                                        Qabul qilingan sana
                                    </Text>
                                </View>
                                <Text style={styles.orderRegisterDate}>
                                    --.--.----
                                </Text>
                            </View>
                        </View>

                        <View style={styles.third}>
                            <View style={styles.orderNumber}>
                                <Text style={styles.summText}>
                                    Umumiy summa:
                                </Text>
                                <Text style={styles.orderSumm}>
                                    1 750 00 so'm
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

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
                                    Buyurtma - {1}
                                </Text>
                                <Text style={styles.orderNumberStyle}>
                                    #10293
                                </Text>
                            </View>
                            <View style={styles.orderStatusWrapper}>
                                <Text style={styles.orderStatusText}>
                                    Buyurma holati
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        textAlign: "center",
                                        textAlignVertical: "center",
                                        backgroundColor: colors.lightPink,
                                        padding: 5,
                                        borderColor: colors.pink,
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        color: colors.pink,
                                    }}
                                >
                                    Moderatorda
                                </Text>
                            </View>
                        </View>

                        <View style={styles.second}>
                            <View style={styles.orderRegisterBox}>
                                <View style={styles.orderRegisterTextWrapper}>
                                    <Feather
                                        name="calendar"
                                        size={18}
                                        color="black"
                                    />
                                    <Text style={styles.orderRegisterText}>
                                        Ro'yxatdan o'tgan sana
                                    </Text>
                                </View>
                                <Text style={styles.orderRegisterDate}>
                                    18.11.2020
                                </Text>
                            </View>
                            <View style={styles.orderRegisterBox}>
                                <View style={styles.orderRegisterTextWrapper}>
                                    <Feather
                                        name="calendar"
                                        size={18}
                                        color="black"
                                    />
                                    <Text style={styles.orderRegisterText}>
                                        Olib ketilgan sana
                                    </Text>
                                </View>
                                <Text style={styles.orderRegisterDate}>
                                    --.--.----
                                </Text>
                            </View>
                            <View style={styles.orderRegisterBox}>
                                <View style={styles.orderRegisterTextWrapper}>
                                    <Feather
                                        name="calendar"
                                        size={18}
                                        color="black"
                                    />
                                    <Text style={styles.orderRegisterText}>
                                        Qabul qilingan sana
                                    </Text>
                                </View>
                                <Text style={styles.orderRegisterDate}>
                                    --.--.----
                                </Text>
                            </View>
                        </View>

                        <View style={styles.third}>
                            <View style={styles.orderNumber}>
                                <Text style={styles.summText}>
                                    Umumiy summa:
                                </Text>
                                <Text style={styles.orderSumm}>
                                    1 750 00 so'm
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

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
                                    Buyurtma - {1}
                                </Text>
                                <Text style={styles.orderNumberStyle}>
                                    #10293
                                </Text>
                            </View>
                            <View style={styles.orderStatusWrapper}>
                                <Text style={styles.orderStatusText}>
                                    Buyurma holati
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        textAlign: "center",
                                        textAlignVertical: "center",
                                        backgroundColor: colors.lighGreen,
                                        padding: 5,
                                        borderColor: colors.green,
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        color: "white",
                                    }}
                                >
                                    Yetkazildi
                                </Text>
                            </View>
                        </View>

                        <View style={styles.second}>
                            <View style={styles.orderRegisterBox}>
                                <View style={styles.orderRegisterTextWrapper}>
                                    <Feather
                                        name="calendar"
                                        size={18}
                                        color="black"
                                    />
                                    <Text style={styles.orderRegisterText}>
                                        Ro'yxatdan o'tgan sana
                                    </Text>
                                </View>
                                <Text style={styles.orderRegisterDate}>
                                    18.11.2020
                                </Text>
                            </View>
                            <View style={styles.orderRegisterBox}>
                                <View style={styles.orderRegisterTextWrapper}>
                                    <Feather
                                        name="calendar"
                                        size={18}
                                        color="black"
                                    />
                                    <Text style={styles.orderRegisterText}>
                                        Olib ketilgan sana
                                    </Text>
                                </View>
                                <Text style={styles.orderRegisterDate}>
                                    --.--.----
                                </Text>
                            </View>
                            <View style={styles.orderRegisterBox}>
                                <View style={styles.orderRegisterTextWrapper}>
                                    <Feather
                                        name="calendar"
                                        size={18}
                                        color="black"
                                    />
                                    <Text style={styles.orderRegisterText}>
                                        Qabul qilingan sana
                                    </Text>
                                </View>
                                <Text style={styles.orderRegisterDate}>
                                    --.--.----
                                </Text>
                            </View>
                        </View>

                        <View style={styles.third}>
                            <View style={styles.orderNumber}>
                                <Text style={styles.summText}>
                                    Umumiy summa:
                                </Text>
                                <Text style={styles.orderSumm}>
                                    1 750 00 so'm
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            ) : (
                <View style={styles.emptyOrderView}> 
                    <View style={styles.emptyBox}></View>
                </View>
            )}

            <TouchableOpacity
                style={styles.fab}
                onPress={() =>
                    navigation.navigate("AddOrderScreen", {
                        id: "ID: #329304",
                    })
                }
            >
                <MaterialIcons name="add" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default OrderScreen;
