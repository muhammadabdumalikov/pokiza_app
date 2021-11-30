import React, { useState } from "react";
import {
    FlatList,
} from "react-native";

import { NoticeItem } from "./NoticeComponent";
import { styles } from "./styles";

const NoticesScreen = () => {
    const data = [{id: "1"}, {id: "2"}]
    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.contentStyle}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item)=> item.id}
            renderItem={() => <NoticeItem/>}
        />
    );
};

export default NoticesScreen;
