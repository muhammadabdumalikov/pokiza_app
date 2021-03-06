import React, { useContext, useEffect, useState } from "react";
import {
    View,
    RefreshControl,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    ScrollView,
    ImageBackground,
    Alert,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../navigation/AuthProvider";
import { request } from "../../../helpers/request";
import CardComponent from "./CardComponent";
import { colors } from "../../../constants/color";

const GET_ORDERS = `{
    clients{
        clientId
      }
    orders{
      orderId
         orderStatus
      orderTotalPrice
      orderBringTime
      orderDeliveryTime
      orderCreatedAt
    }
  }`;

const GET_CLIENT_ID = `{
    clients{
      clientId
    }
  }`

const OrderScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    const [fetchedData, setFetchedData] = useState(null);
    const [userToken, setUserToken] = useState();
    const [isLoading, setLoading] = useState(true);

    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const value = await AsyncStorage.getItem("user_token");
                setUserToken(value);
                let data = await fetch("https://pokiza.herokuapp.com/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        token: value,
                    },
                    body: JSON.stringify({
                        query: GET_ORDERS,
                        variables: null,
                    }),
                });
                let client = await request(GET_CLIENT_ID, null, value)
                let jsonData = await data.json();

                if (!cleanupFunction) {
                    setFetchedData(jsonData.data.orders.reverse());
                    navigation.setOptions({
                        title: `ID: @${client.clients[0].clientId}`,
                    });
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        return () => (cleanupFunction = true);
    }, []);

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        const value = await AsyncStorage.getItem("user_token");
        let data = await fetch("https://pokiza.herokuapp.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: value,
            },
            body: JSON.stringify({
                query: GET_ORDERS,
                variables: null,
            }),
        });
        let jsonData = await data.json();

        setFetchedData(jsonData.data.orders.reverse());
        setRefreshing(false);
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
                    {fetchedData.length > 0 ? (
                        <FlatList
                            data={fetchedData}
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
                        <ScrollView
                            contentContainerStyle={styles.emptyOrderView}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                        >
                            <View style={styles.emptyBox}>
                                <ImageBackground
                                    style={{ width: "100%", height: "100%" }}
                                    source={require("../../../../assets/carpet.png")}
                                />
                            </View>
                        </ScrollView>
                    )}
                </>
            )}

            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate("AddOrderScreen")}
            >
                <MaterialIcons name="add" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default OrderScreen;
