import React, { useState } from "react";
import {
    FlatList,
} from "react-native";

import { NoticeItem } from "./NoticeComponent";
import { styles } from "./styles";

const NoticesScreen = () => {
    const data = [{}, {}]
    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.contentStyle}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={() => <NoticeItem/>}
        />
    );
};

export default NoticesScreen;
