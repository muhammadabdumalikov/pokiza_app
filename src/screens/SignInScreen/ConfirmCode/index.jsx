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
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from "../../../navigation/AuthProvider";
import { request } from "../../../helpers/request";
import styles from "./styles";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

const CELL_COUNT = 4;

const CODE_QUERY = gql`mutation ($phoneNumber: String!, $password: String!){
    enterClientPassword(phoneNumber: $phoneNumber, password: $password){
      status
      message
      data
      token
      permissions{
        branchId
        branchName
        permissionsList{
          permissionAction
          permissionModel
        }
      }
    }
  }`;

const ConfirmCode = ({ navigation }) => {
    const [verify, {loading}] = useMutation(CODE_QUERY);
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const { setCode, phoneNumber } = useContext(AuthContext);

    
    const handleSubmit = () => {
        verify({
            variables: {
                phoneNumber: phoneNumber,
                password: value,
            }
        })
            .then(({data}) => {
                if(data.enterClientPassword.status == 200){
                    AsyncStorage.setItem('user_token', data.enterClientPassword.token)
                    navigation.navigate("PersonalData");
                }
            })
            .catch((err) => {
                console.log(error)
            });
    }

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
                    onPress={handleSubmit}
                >
                    <Text style={styles.sendCodeText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ConfirmCode;
