import React from "react";
import { TouchableOpacity, Text, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { colors } from "../constants/color";

const CallButton = () => {
    return (
        <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${1221}`)}
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                height: 50,
                width: 80,
                marginRight: 16,
            }}
        >
            <FontAwesome name="phone" size={24} color={colors.blue} />
            <Text
                style={{
                    color: colors.blue,
                    fontSize: 18,
                    fontWeight: "bold",
                }}
            >
                1221
            </Text>
        </TouchableOpacity>
    );
};

export default CallButton;
