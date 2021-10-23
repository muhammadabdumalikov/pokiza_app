import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { AuthContext } from "../../../navigation/AuthProvider";

import styles from "./styles";

const CELL_COUNT = 4;

const ConfirmCode = ({navigation}) => {
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const { setCode } = useContext(AuthContext);
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            <View style={styles.logoBox}>
                <Text style={styles.signIn}>Sign In</Text>
                <Text style={styles.signInDescription}>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure
                </Text>
            </View>
            <View style={styles.root}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={(value) => {
                        setValue(value);
                    }}
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

                <TouchableOpacity>
                    <Text style={styles.forgotPass}>Resend</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.sendCodeWrapper,
                        backgroundColor:
                            value.length < 4 ? "#AAADB0" : "#007AFF",
                    }}
                    onPress={() => {
                        if (value.length > 3) {
                            setCode(value);
                        }
                        navigation.navigate("PersonalData")
                    }}
                >
                    <Text style={styles.sendCodeText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default ConfirmCode
