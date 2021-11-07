import React, { useContext, useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../navigation/AuthProvider";
import styles from "./styles";
import { request } from "../../../helpers/request";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const PersonalData = ({ navigation }) => {
    const GET_STATE_QUERY = `{
        states {
          stateId
          stateName
        }
      }`;

    const GET_REGION_QUERY = `
    query($stateId: ID!){
        regions(stateId: $stateId){
          regionId
          regionName
        }
      }`;

    const { age, setAge, gender, setGender, setFirstName, setLastName } =
        useContext(AuthContext);
    let [userToken, setUserToken] = useState("");
    const [selectedFirstname, setSelectedFirstname] = useState("");
    const [selectedLastname, setSelectedLastname] = useState("");
    const [selectedGender, setSelectedGender] = useState("male");
    const [selectedState, setSelectedState] = useState();
    let [states, setStates] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    let [regions, setRegions] = useState();
    let [isLoading, setLoading] = useState(true);
    let firstname;
    let lastname;

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("user_token");
                setUserToken(value);
                setStates(await request(GET_STATE_QUERY, null, value));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchRegions() {
            try {
                setRegions(
                    await request(
                        GET_REGION_QUERY,
                        { stateId: selectedState },
                        userToken
                    )
                );
            } catch (error) {
                console.log(error);
            }
        }
        fetchRegions();
    }, [selectedState]);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            {isLoading ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator
                        size="large"
                        color="#00ff00"
                        style={{ alignSelf: "center" }}
                    />
                </View>
            ) : (
                <View>
                    <View style={styles.logoBox}>
                        <Text style={styles.signIn}>Sign In</Text>
                        <Text style={styles.signInDescription}>
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure
                        </Text>
                    </View>
                    <View style={styles.personalDataBox}>
                        {/* Name input ------------------------------------ */}
                        <View
                            style={{
                                ...styles.inputContainer,
                            }}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Name</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                numberOfLines={1}
                                placeholder="Enter first name"
                                placeholderTextColor="#B8B8BB"
                                onChangeText={(value) =>
                                    setSelectedFirstname(value)
                                }
                                keyboardType="default"
                                // autoFocus={true}
                                maxLength={20}
                            />
                        </View>

                        {/* Surname input ------------------------------------------ */}
                        <View
                            style={{
                                ...styles.inputContainer,
                            }}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Surname</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                numberOfLines={1}
                                placeholder="Enter last name"
                                placeholderTextColor="#B8B8BB"
                                onChangeText={(value) =>
                                    setSelectedLastname(value)
                                }
                                keyboardType="default"
                                // autoFocus={true}
                                maxLength={20}
                            />
                        </View>

                        <View style={{...styles.inputContainer}}>
                            {/* Age input ----------------------------------------------- */}
                            <View
                                style={{
                                    ...styles.inputContainer,
                                    borderBottomWidth: 0,
                                    width: "48%",
                                }}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Age</Text>
                                </View>
                                <TextInput
                                    style={{ height: "100%", width: "50%" }}
                                    numberOfLines={1}
                                    placeholder="20"
                                    placeholderTextColor="#B8B8BB"
                                    onChangeText={(value) => setAge(value)}
                                    keyboardType="numeric"
                                    // autoFocus={true}
                                    maxLength={3}
                                />
                            </View>

                            {/* Gender input --------------------------------------------- */}
                            <View
                                style={{
                                    ...styles.inputContainer,
                                    borderBottomWidth: 0,
                                    width: "48%",
                                }}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Gender</Text>
                                </View>
                                <Picker
                                    style={{ height: "100%", width: 120 }}
                                    selectedValue={gender}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setGender(itemValue);
                                    }}
                                >
                                    <Picker.Item label="Male" value="male" />
                                    <Picker.Item
                                        label="Female"
                                        value="female"
                                    />
                                </Picker>
                            </View>
                        </View>

                        {/* State input ------------------------------------ */}
                        <View
                            style={{
                                ...styles.inputContainer,
                            }}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>State</Text>
                            </View>
                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedState(itemValue);
                                }}
                            >
                                {states.states.map((value) => (
                                    <Picker.Item
                                        key={value.stateId}
                                        label={value.stateName}
                                        value={value.stateId}
                                    />
                                ))}
                            </Picker>
                        </View>

                        {/* Region input ------------------------------------------ */}
                        <View
                            style={{
                                ...styles.inputContainer,
                            }}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Region</Text>
                            </View>
                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={selectedRegion}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedRegion(itemValue);
                                }}
                            >
                                {regions
                                    ? regions.regions.map((value) => (
                                          <Picker.Item
                                              key={value.regionId}
                                              label={value.regionName}
                                              value={value.regionId}
                                          />
                                      ))
                                    : []}
                            </Picker>
                        </View>

                        <TouchableOpacity
                            style={styles.sendCodeWrapper}
                            onPress={() => {
                                if (
                                    age &&
                                    gender &&
                                    selectedFirstname &&
                                    selectedLastname
                                ) {
                                    setFirstName(selectedFirstname);
                                    setLastName(selectedLastname);
                                    navigation.navigate("AddAddress");
                                }
                            }}
                        >
                            <Text style={styles.sendCodeText}>Send code</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

export default PersonalData;
