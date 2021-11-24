import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";

const NoticesScreen = () => {
    const [text, setText] = useState(
        "Состоятельные жители Мехико в панике: всего за шесть дней в городе пропали 24 человека! Бывшего агента ЦРУ Джона Кризи нанимают телохранителем девятилетней дочери промышленника Сэмюэля Рамоса, Питы Рамос. Поначалу Кризи с трудом терпит соседство не по годам развитой девочки. Но со временем они становятся друзьями. Кризи вновь почувствовал вкус к жизни, но все рушится, когда Питу похищают. Кризи клянется убить любого, кто втянут в похищение Питы. Теперь его никто не остановит…"
    );
    const [showFull, setShowFull] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
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
                <Text>
                    {text.split(".")[0] + "."}
                    <Text onPress={() => setShowFull(true)}>More</Text>
                </Text>
            )}
        </ScrollView>
    );
};

export default NoticesScreen;
