import React, { useContext, useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
    Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../navigation/AuthProvider";
import styles from "./styles";
import { request } from "../../../helpers/request";

const ADDRESS_QUERY = `mutation(
    $firstName: String!
    $lastName: String
    $secondContact: String
    $age: Int!
    $gender: Int!
    $branchId: ID!
    $addressId: ID!
  ) {
    registerClient(
      firstName: $firstName
      lastName: $lastName
      age: $age
      gender: $gender
      secondContact: $secondContact
      branchId: $branchId
      addressId: 5
    ) {
      status
      message
      data
      token
      permissions {
        branchId
        branchName
        permissionsList {
          permissionAction
          permissionModel
        }
      }
    }
  }
  `;

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

const GET_AREAS_QUERY = `query($regionId: ID!){
    areas(regionId: $regionId){
      areaId
      areaName
    }
  }`;

const GET_NEIGHBORHOOD_QUERY = `query($regionId: ID!){
    neighborhoods(regionId: $regionId){
      neighborhoodId
      neighborhoodName
    }
  }`;

const GET_STREET_QUERY = `query($neighborhoodId: ID!){
    streets(neighborhoodId: $neighborhoodId ){
      streetId
      streetName
    }
  }`;

const GET_BRANCHES_QUERY = `query($regionId: ID!){
    regions(regionId: $regionId){
      branch{
        branchId
        branchName
      }
    }
  }`;

const MUTATION_ADD_ADDRESS = `mutation($stateId:ID!,$regionId:ID!){ 
    addAddress (stateId: $stateId, regionId: $regionId){
      status
      message
      data
    }
  }`;

const MUTATION_REGISTER_CLIENT = `mutation($firstName:String!,$lastName:String,$age:Int!,$gender:Int!,$branchId:ID!,$addressId:ID!){
    registerClient(firstName: $firstName,lastName: $lastName,age: $age,gender: $gender,branchId: $branchId,addressId: $addressId){
      status
      message
      data
      token
    }
  }`;

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const AddAddress = ({ navigation }) => {
    const { firstName, lastName, gender, age, setUser, setAddressId } = useContext(AuthContext);
    const [selectedState, setSelectedState] = useState();
    let [states, setStates] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    let [regions, setRegions] = useState();
    let [areas, setAreas] = useState();
    const [selectedBranch, setSelectedBranch] = useState();
    let [branches, setBranches] = useState();
    let [isLoading, setLoading] = useState(true);
    let [userToken, setUserToken] = useState("");
    let target;
    let homeNumber;

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

    useEffect(() => {
        async function fetchAreas() {
            try {
                setAreas(
                    await request(
                        GET_AREAS_QUERY,
                        { regionId: selectedRegion },
                        userToken
                    )
                );
            } catch (error) {
                console.log(error);
            }
        }
        fetchAreas();
    }, [selectedRegion]);

    // useEffect(() => {
    //     async function fetchNeighborhood() {
    //         try {
    //             setNeighborhood(
    //                 await request(
    //                     GET_NEIGHBORHOOD_QUERY,
    //                     { regionId: selectedRegion },
    //                     userToken
    //                 )
    //             );
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchNeighborhood();
    // }, [selectedRegion]);

    // useEffect(() => {
    //     async function fetchStreet() {
    //         try {
    //             setStreet(
    //                 await request(
    //                     GET_STREET_QUERY,
    //                     { neighborhoodId: selectedNeighborhood },
    //                     userToken
    //                 )
    //             );
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchStreet();
    // }, [selectedNeighborhood]);

    useEffect(() => {
        async function fetchBranches() {
            try {
                setBranches(
                    await request(
                        GET_BRANCHES_QUERY,
                        { regionId: selectedRegion },
                        userToken
                    )
                );
            } catch (error) {
                console.log(error);
            }
        }
        fetchBranches();
    }, [selectedRegion]);

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
                <View style={{ flex: 1 }}>
                    <View style={styles.logoBox}>
                        <Image
                            source={require("../../../../assets/logo.png")}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <View style={styles.signInWrapper}>
                            <Text style={styles.signIn}>Tizimga kirish</Text>
                            <Text style={styles.signInDescription}>
                                Tizimga kirish uchun telefon raqamingizni
                                kiriting.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.personalDataBox}>
                        <View style={styles.infoWrapper}>
                            {/* State input ------------------------------------ */}
                            <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Viloyat</Text>
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
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Tuman</Text>
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

                            {/* Area input ------------------------------------------ */}
                            {/* <View
                            style={styles.inputContainer}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Area</Text>
                            </View>
                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={selectedArea}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedArea(itemValue)
                                }
                            >
                                {areas
                                    ? areas.areas.map((value) => (
                                          <Picker.Item
                                              key={value.areaId}
                                              label={value.areaName}
                                              value={value.areaId}
                                          />
                                      ))
                                    : []}
                            </Picker>
                        </View> */}

                            {/* Neighborhood input ------------------------------------------ */}
                            {/* <View
                            style={styles.inputContainer}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Neighborhood</Text>
                            </View>
                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={selectedNeighborhood}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedNeighborhood(itemValue);
                                }}
                            >
                                {neighborhood
                                    ? neighborhood.neighborhoods.map(
                                          (value) => (
                                              <Picker.Item
                                                  key={value.neighborhoodId}
                                                  label={value.neighborhoodName}
                                                  value={value.neighborhoodId}
                                              />
                                          )
                                      )
                                    : []}
                            </Picker>
                        </View> */}

                            {/* Street input ------------------------------------------ */}
                            {/* <View
                            style={styles.inputContainer}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <View style={styles.preTextWrapperStyle}>
                                <Text style={styles.preText}>Street</Text>
                            </View>
                            <Picker
                                style={styles.pickerStyle}
                                selectedValue={selectedStreet}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedStreet(itemValue);
                                }}
                            >
                                {street
                                    ? street.streets.map((value) => (
                                          <Picker.Item
                                              key={value.streetId}
                                              label={value.streetName}
                                              value={value.streetId}
                                          />
                                      ))
                                    : []}
                            </Picker>
                        </View> */}

                            {/* Target options --------------------------------------------- */}
                            {/* <View
                            style={styles.inputContainer}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <TextInput
                                style={styles.input}
                                numberOfLines={1}
                                placeholder="Enter target to find easy"
                                placeholderTextColor="#B8B8BB"
                                onChangeText={(value) => (target = value)}
                                keyboardType="default"
                                // autoFocus={true}
                                maxLength={9}
                            />
                        </View> */}

                            {/* Home Number input ----------------------------------------------------- */}
                            {/* <View
                            style={styles.inputContainer}
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <TextInput
                                style={styles.input}
                                numberOfLines={1}
                                placeholder="Enter your home number"
                                placeholderTextColor="#B8B8BB"
                                onChangeText={(value) => (homeNumber = value)}
                                keyboardType="default"
                                // autoFocus={true}
                                maxLength={9}
                            />
                        </View> */}

                            {/* Branch input ----------------------------------------------- */}
                            <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Branch</Text>
                                </View>
                                <Picker
                                    style={styles.pickerStyle}
                                    selectedValue={selectedBranch}
                                    enabled={false}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedBranch(itemValue)
                                    }
                                >
                                    {branches ? (
                                        <Picker.Item
                                            key={
                                                branches.regions[0].branch
                                                    .branchId
                                            }
                                            label={
                                                branches.regions[0].branch
                                                    .branchName
                                            }
                                            value={
                                                branches.regions[0].branch
                                                    .branchId
                                            }
                                        />
                                    ) : (
                                        []
                                    )}
                                </Picker>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.sendCodeWrapper}
                            onPress={async () => {
                                try {
                                    let addAddress = await request(
                                        MUTATION_ADD_ADDRESS,
                                        {
                                            stateId: selectedState,
                                            regionId: selectedRegion,
                                        },
                                        userToken
                                    );
                                    setAddressId(addAddress.addAddress.data.address_id)
                                    let {registerClient} = await request(
                                        MUTATION_REGISTER_CLIENT,
                                        {
                                            firstName: firstName,
                                            lastName: lastName,
                                            age: parseInt(age),
                                            gender: parseInt(gender),
                                            branchId: selectedBranch,
                                            addressId:
                                                addAddress.addAddress.data
                                                    .address_id,
                                        },
                                        userToken
                                    );
                                    if(registerClient.data.is_registered){
                                        setUser(registerClient.data)
                                        AsyncStorage.setItem(
                                            "user_token",
                                            registerClient.token
                                        );
                                    }
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                        >
                            <Text style={styles.sendCodeText}>Tasdiqlash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

export default AddAddress;
