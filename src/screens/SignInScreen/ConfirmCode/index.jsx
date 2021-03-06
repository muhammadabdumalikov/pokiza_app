import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../navigation/AuthProvider";
import { request } from "../../../helpers/request";
import styles from "./styles";
import { gql, useMutation } from "@apollo/client";

const CELL_COUNT = 4;

const ConfirmCode = ({ navigation, route }) => {
    const CODE_QUERY = gql`
        mutation ($password: Code!) {
            enterClientPassword(password: $password) {
                status
                message
                registered
                data {
                    ... on Client {
                        clientId
                    }
                }
                token
            }
        }
    `;

    const GET_ADDRESS_ID_QUERY = `{
        address{
            addressId
            state{
                stateId
                stateName
            }
            region{
                regionId
                regionName
            }
        }
    }`;

    const [mutateFunction, { data, loading, error }] = useMutation(CODE_QUERY);
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const token = route.params.phoneToken;
    const { setUser, setAddressId } = useContext(AuthContext);

    const handleSubmit = async () => {
        // let data = await request(CODE_QUERY, { password: value }, token);
        mutateFunction({ variables: { password: value } });

        console.log(data, loading, error);

        // if (data.enterClientPassword.registered) {
        //     setAddressId(
        //         await request(
        //             GET_ADDRESS_ID_QUERY,
        //             null,
        //             data.enterClientPassword.token
        //         )
        //     );
        //     setUser(data.enterClientPassword.data);

        //     await AsyncStorage.removeItem("phone_token");
        //     await AsyncStorage.setItem(
        //         "user_token",
        //         data.enterClientPassword.token
        //     );
        //     navigation.reset({
        //         index: 0,
        //         routes: [
        //             {
        //                 name: "App",
        //             },
        //         ],
        //     });
        // }
        // if (
        //     data.enterClientPassword.status == 200 &&
        //     data.enterClientPassword.registered == false
        // ) {
        //     AsyncStorage.setItem("user_token", data.enterClientPassword.token);
        //     navigation.navigate("Auth", { screen: "PersonalData" });
        // }
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.logoBox}>
                <Image
                    source={require("../../../../assets/logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View style={styles.signInWrapper}>
                    <Text style={styles.signIn}>Tizimga kirish</Text>
                    <Text style={styles.signInDescription}>
                        SMS orqali kod yuborildi, agar kod yuborilmagan bo'lsa,
                        qayta yuborish tugmasini bosing.{" "}
                    </Text>
                </View>
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
                    <Text style={styles.forgotPass}>Qayta yuborish</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.sendCodeWrapper,
                        backgroundColor:
                            value.length < 4 ? "#AAADB0" : "#007AFF",
                    }}
                    disabled={value.length < 4 ? true : false}
                    onPress={handleSubmit}
                >
                    <Text style={styles.sendCodeText}>Tasdiqlash</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ConfirmCode;
