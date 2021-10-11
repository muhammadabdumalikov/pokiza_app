import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ProgressBar } from "@react-native-community/progress-bar-android";

import { styles } from "./styles";

const OrderDetailScreen = ({ navigation, route }) => {
    return (
        // Orders with scrollable view ------------------------------------
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentStyle}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.sumLine}>
                <Text style={styles.sumText}>
                    Total: <Text style={styles.sumNum}>120.000</Text> sum
                </Text>
                <TouchableOpacity>
                    <Text style={styles.outOfTurn}>Out of Turn</Text>
                </TouchableOpacity>
            </View>

            {/* Orders list  with detail ------------------------------------- */}
            <View style={styles.ordersList}>
                <View style={styles.orderBox}>
                    <View style={styles.orderBoxContent}>
                        <View style={styles.orderNumber}>
                            <Text style={styles.orderNumberStyle}>
                                3 pcs.
                                <Text style={styles.productNameStyle}>
                                   {" "} carpet
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
                </View>
                <View style={styles.orderDetailBox}>
                    <View style={styles.orderDetailTextContent}>
                        <View style={styles.orderDetailStatusContent}>
                            <Text style={styles.statusText}>Status:</Text>
                            <Text style={styles.status}>In Washing</Text>
                        </View>
                        <View style={styles.orderDetailSizeContent}>
                            <Text style={styles.sizeText}>Size:</Text>
                            <Text style={styles.size}>12 m.kv</Text>
                        </View>
                    </View>
                    <Image style={styles.orderImage}/>
                </View>
            </View>

            <TouchableOpacity style={styles.fab}>
                <MaterialIcons name="add" size={32} color="white" />
            </TouchableOpacity>
        </ScrollView>
    );
};

export default OrderDetailScreen;
