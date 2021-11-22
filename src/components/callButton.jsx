import React from "react";
import {TouchableOpacity, Text} from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors } from "../constants/color";

const CallButton = () => {
    return (
        <TouchableOpacity
            onPress={() => console.log("123")}
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                height: 50,
                width: 80,
                marginRight: 16,
            }}
        >
            <Feather name="phone" size={24} color={colors.blue} />
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
