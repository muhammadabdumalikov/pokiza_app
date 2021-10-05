import React from "react";
import { View, Text, Pressable, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import FormInput from "../../components/FormInput/FormInput";
// import { withSafeArea } from 'react-native-safe-area'

import styles from "./styles";

// const SafeAreaView = withSafeArea(View, 'margin', 'all')

export default function () {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.logoBox}>
                    <Text style={styles.signIn}>Sign In</Text>
                    <Text style={styles.signInDescription}>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure
                    </Text>
                </View>
                <View style={styles.signInBox}>

                    <FormInput preText="Number" placeholderText="Enter phone number"/>

                    <TouchableOpacity style={styles.forgotPassWrapper}>
                        <Text style={styles.forgotPass}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sendCodeWrapper}>
                        <Text style={styles.sendCodeText}>Send code</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
