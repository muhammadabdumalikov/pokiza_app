import React from "react";

import { View, Image } from "react-native";

const LogoImage = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image
                source={require("../../assets/logo.png")}
                resizeMode="contain"
                style={{
                    width: 80,
                    height: 50,
                    marginLeft: 16,
                }}
            />
        </View>
    );
};

export default LogoImage;
