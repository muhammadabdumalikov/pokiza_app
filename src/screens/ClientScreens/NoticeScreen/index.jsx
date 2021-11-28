import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    ImageBackground,
    Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

const NoticesScreen = () => {
    const [text, setText] = useState(
        "Состоятельные жители Мехико в панике: всего за шесть дней в городе пропали 24 человека! Бывшего агента ЦРУ Джона Кризи нанимают телохранителем девятилетней дочери промышленника Сэмюэля Рамоса, Питы Рамос. Поначалу Кризи с трудом терпит соседство не по годам развитой девочки. Но со временем они становятся друзьями. Кризи вновь почувствовал вкус к жизни, но все рушится, когда Питу похищают. Кризи клянется убить любого, кто втянут в похищение Питы. Теперь его никто не остановит…"
    );
    const [showFull, setShowFull] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.noticeBox}>
                <View style={styles.logoLine}>
                    <Image
                        style={styles.logoImg}
                        source={require("../../../../assets/logo.png")}
                        resizeMode="contain"
                    />
                    <Text style={styles.logoDate}>Sana: {"22.08.2021"}</Text>
                </View>
                <ImageBackground
                    style={styles.photo}
                    source={require("../../../../assets/logo.png")}
                    resizeMode="contain"
                />
                <View style={styles.noticeTxt}>
                    {showFull ? (
                        <Text>
                            {text}
                            <Text
                                style={styles.toggleText}
                                onPress={() => setShowFull(false)}
                            >
                                Less
                            </Text>
                        </Text>
                    ) : (
                        <Text>{text.split(".")[0] + "...More"}</Text>
                    )}
                    <Pressable onPress={() => setShowFull(true)}>
                        <MaterialIcons
                            name="expand-less"
                            size={24}
                            color="black"
                        />
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

export default NoticesScreen;
