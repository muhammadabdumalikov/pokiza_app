import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    RefreshControl,
    ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { request } from "../../../helpers/request";
import { CardComponent } from "./CardComponent";

const OrderDetailScreen = ({ navigation, route }) => {
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState()

    const GET_PRODUCTS = `query($orderId: ID){
        products(orderId: $orderId){
          productId
          productStatus
          order{
            orderId
            orderSpecial
            orderAddress{
              state{
                        stateName
                      }
                      region{
                        regionName
                      }
                      neighborhood{
                        neighborhoodName
                      }
                      street{
                        streetName
                      }
                      area{
                        areaName
                      }
                      homeNumber
                      target
            }
            orderOwner{
              clientInfo{
                firstName
                lastName
              }
            }
          }
        }
      }`;

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("user_token");
                setProducts(await request(GET_PRODUCTS, null, value));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    // const onRefresh = React.useCallback(async () => {
    //     setRefreshing(true);
    //     const value = await AsyncStorage.getItem("user_token");
    //     let data = await fetch("https://pokiza.herokuapp.com/graphql", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             token: value,
    //         },
    //         body: JSON.stringify({
    //             query: GET_ORDERS,
    //             variables: null,
    //         }),
    //     });
    //     let jsonData = await data.json();

    //     setFetchedData(jsonData.data.orders.reverse());
    //     setRefreshing(false);
    // }, []);

    return (
        // Orders with scrollable view ------------------------------------
        <View style={styles.containerAll}>
            {products.products.length > 0 ? (
                <>
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
                            Umumiy <Text style={styles.sumNum}>120.000</Text>
                            so'm
                        </Text>
                        <Text style={styles.outOfTurn}>
                            Tariff: <Text style={styles.outOfTurn}>Tezkor</Text>
                        </Text>
                    </View>
                    <FlatList
                        data={products ? products.products : []}
                        renderItem={({ item }) => <CardComponent item={item} />}
                        keyExtractor={(item) => item.id}
                        style={styles.container}
                        contentContainerStyle={styles.contentStyle}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            ) : (
                <ScrollView
                    contentContainerStyle={styles.emptyOrderView}
                    // refreshControl={
                    //     <RefreshControl
                    //         refreshing={refreshing}
                    //         onRefresh={onRefresh}
                    //     />
                    // }
                >
                    <View style={styles.emptyBox}>
                        <ImageBackground
                            style={{ width: "100%", height: "100%" }}
                            source={require("../../../../assets/carpet.png")}
                        />
                        <Text style={{ textAlign: "center" }}>
                            Buyumlar mavjud emas.
                        </Text>
                    </View>
                </ScrollView>
            )}

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
