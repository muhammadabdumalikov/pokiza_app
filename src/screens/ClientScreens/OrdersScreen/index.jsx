import React, { useContext, useEffect, useState } from "react";
import {
    View,
    RefreshControl,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../navigation/AuthProvider";
import { request } from "../../../helpers/request";
import CardComponent from "./CardComponent";
import { colors } from "../../../constants/color";

const GET_ORDERS = `{
    orders{
      orderId
         orderStatus
      orderTotalPrice
      orderBringTime
      orderDeliveryTime
      orderCreatedAt
    }
  }`;


const OrderScreen = ({ navigation }) => {
    // const [getOrders, {data, loading, error}] = useLazyQuery(GET_ORDERS);
    const [fetchedData, setFetchedData] = useState();
    const [userToken, setUserToken] = useState();
    const [isLoading, setLoading] = useState(true);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        setFetchedData(await request(GET_ORDERS, null, userToken));
        setRefreshing(false)
    }, []);

    useEffect(() => {
        async function fetchData() {
            const value = await AsyncStorage.getItem("user_token");
            setUserToken(value);
            setFetchedData(await request(GET_ORDERS, null, value));
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        // Orders with scrollable view ------------------------------------
        <View style={styles.containerWrapper}>
            {isLoading ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator
                        size="large"
                        color="#2196F3"
                        style={{ alignSelf: "center" }}
                    />
                </View>
            ) : (
                <>
                    {fetchedData ? (
                        <FlatList
                            data={fetchedData.orders}
                            renderItem={({ item }) => (
                                <CardComponent
                                    item={item}
                                    navigation={navigation}
                                />
                            )}
                            keyExtractor={(item) => item.orderId}
                            style={styles.container}
                            contentContainerStyle={styles.contentStyle}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        />
                    ) : (
                        <View style={styles.emptyOrderView}>
                            <View style={styles.emptyBox}></View>
                        </View>
                    )}
                </>
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
