import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";

import { styles } from "./styles"

const CELL_COUNT = 4;

const ConfirmCode = () => {
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <View style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}
                    >
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />

            <TouchableOpacity style={styles.resend}>
                <Text style={styles.forgotPass}>Resend</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    ...styles.sendCodeWrapper,
                    backgroundColor: value.length < 4 ? "#AAADB0" : "#007AFF",
                }}
                onPress={() => setPhoneNumber(initialNumber)}
            >
                <Text style={styles.sendCodeText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ConfirmCode;
