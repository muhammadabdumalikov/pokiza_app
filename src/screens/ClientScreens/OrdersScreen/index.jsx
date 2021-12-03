import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Pressable, Touchable, FlatList } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../navigation/AuthProvider";
import { request } from "../../../helpers/request";
import CardComponent from "./CardComponent";
import { colors } from "../../../constants/color";

const GET_ORDERS = `
    query Orders {
        orders {
            orderId
            orderCreatedAt
            orderDeliveryTime
            orderStatus
        }
    }
`;

const OrderScreen = ({ navigation }) => {
    // const [getOrders, {data, loading, error}] = useLazyQuery(GET_ORDERS);
    const [fetchedData, setFetchedData] = useState()
    const {user} = useContext(AuthContext)

    useEffect(() => {
        async function fetchData() {
            const token = await AsyncStorage.getItem('user_token');
            setFetchedData(await request(GET_ORDERS, null, token))
        }

        fetchData()
    }, []);

    // useEffect(() => {
    //     getOrders();
    // }, [])

    // useEffect(() => {
    //     console.log(data, error);
    // }, [data]);

    return (
        // Orders with scrollable view ------------------------------------
        <View style={styles.containerWrapper}>
            {fetchedData ? (
               <FlatList
               data={fetchedData.orders}
               renderItem={({item})=> <CardComponent item={item} navigation={navigation}/>}
               keyExtractor={(item) => item.orderId}
               style={styles.container}
               contentContainerStyle={styles.contentStyle}
               showsVerticalScrollIndicator={false}
           />
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
