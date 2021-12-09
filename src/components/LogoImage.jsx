import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Image, TouchableOpacity } from "react-native";

const LogoImage = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <Image
                    source={require("../../assets/logo.png")}
                    resizeMode="contain"
                    style={{
                        width: 80,
                        height: 50,
                        marginLeft: 16,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default LogoImage;
