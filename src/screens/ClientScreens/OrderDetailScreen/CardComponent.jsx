import React, {useState} from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import Collapsible from "react-native-collapsible";
import { styles } from "./styles";

export const CardComponent = ({ item }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    return (
        <View style={styles.ordersList}>
            <TouchableOpacity
                onPress={toggleExpanded}
                style={styles.orderBox}
            >
                <View style={styles.orderBoxContent}>
                    <View style={styles.orderNumber}>
                        <Text style={styles.orderNumberStyle}>
                            {"3"} dona {" "}
                            <Text style={styles.productNameStyle}>
                                {"Gilam"}
                            </Text>
                        </Text>
                        <Text>
                            O'lcham:
                            <Text style={styles.orderNumberStyle}>
                                {" "}
                                37 m.kv
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.orderNumber}>
                        <Text style={styles.orderNumberStyle}>
                            Jami: 185.000{" "}
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
               
                    <View
                        style={{
                            ...styles.orderDetailBox,
                            backgroundColor: "#AAF7B5",
                        }}
                    >
                        <View style={styles.orderDetailTextContent}>
                            <View style={styles.orderDetailStatusContent}>
                                <Text style={styles.statusText}>
                                    Holati:
                                </Text>
                                <Text style={styles.status}>{"Yuvilishda"}</Text>
                                <Text style={styles.priceText}>Narxi</Text>
                            </View>
                            <View style={styles.orderDetailSizeContent}>
                                <Text style={styles.sizeText}>O'lcham:</Text>
                                <Text style={styles.size}>12 m.kv</Text>
                                <Text style={styles.priceText}>{"64.000"} so'm</Text>
                            </View>
                        </View>
                        <Image style={styles.orderImage} />
                    </View>
                    <View
                        style={{
                            ...styles.orderDetailBox,
                        }}
                    >
                        <View style={styles.orderDetailTextContent}>
                            <View style={styles.orderDetailStatusContent}>
                                <Text style={styles.statusText}>
                                    Holati:
                                </Text>
                                <Text style={styles.status}>{"Yuvilishda"}</Text>
                                <Text style={styles.priceText}>Narxi</Text>
                            </View>
                            <View style={styles.orderDetailSizeContent}>
                                <Text style={styles.sizeText}>O'lcham:</Text>
                                <Text style={styles.size}>12 m.kv</Text>
                                <Text style={styles.priceText}>{"64.000"} so'm</Text>
                            </View>
                        </View>
                        <Image style={styles.orderImage} />
                    </View>
            </Collapsible>
        </View>
    );
};


