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
import Collapsible from "react-native-collapsible";

import { styles } from "./styles";

const OrderDetailScreen = ({ navigation, route }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    const DATA = [
        { id: "1", key: "1111" },
        { id: "2", key: "1111" },
        { id: "3", key: "1111" },
        { id: "4", key: "1111" },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.ordersList}>
                <TouchableOpacity
                    onPress={toggleExpanded}
                    style={styles.orderBox}
                >
                    <View style={styles.orderBoxContent}>
                        <View style={styles.orderNumber}>
                            <Text style={styles.orderNumberStyle}>
                                3 pcs.
                                <Text style={styles.productNameStyle}>
                                    {" "}
                                    carpet
                                </Text>
                            </Text>
                            <Text>
                                Size:
                                <Text style={styles.orderNumberStyle}>
                                    {" "}
                                    37 m.kv
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.orderNumber}>
                            <Text style={styles.orderNumberStyle}>
                                Price: 185.000{" "}
                                <Text style={{ fontSize: 12 }}>sum</Text>
                            </Text>
                            <Text style={styles.finishedProduct}>
                                1<Text style={{ color: "black" }}>/3</Text>
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: 4,
                            backgroundColor: "#F8F8F8",
                        }}
                    >
                        <View
                            style={{
                                height: "100%",
                                width: "33%",
                                backgroundColor: "#3DA700",
                            }}
                        ></View>
                    </View>
                </TouchableOpacity>

                <Collapsible
                    style={styles.hiddenContent}
                    collapsed={collapsed}
                    align="center"
                >
                    <View>
                        <View
                            style={{
                                ...styles.orderDetailBox,
                                backgroundColor: "#AAF7B5",
                            }}
                        >
                            <View style={styles.orderDetailTextContent}>
                                <View style={styles.orderDetailStatusContent}>
                                    <Text style={styles.statusText}>
                                        Status:
                                    </Text>
                                    <Text style={styles.status}>Done</Text>
                                </View>
                                <View style={styles.orderDetailSizeContent}>
                                    <Text style={styles.sizeText}>Size:</Text>
                                    <Text style={styles.size}>12 m.kv</Text>
                                </View>
                            </View>
                            <Image style={styles.orderImage} />
                        </View>
                    </View>
                </Collapsible>
            </View>
        );
    };
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
                renderItem={renderItem}
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
