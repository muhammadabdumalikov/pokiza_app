import React, { useContext, useState, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    ScrollView,
    Text,
    ActivityIndicator,
    TextInput,
    Dimensions,
    Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

import { AuthContext } from "../../../navigation/AuthProvider";
import { request } from "../../../helpers/request";
import { styles } from "./styles";

const EditLocation = ({ navigation }) => {
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

    const CHANGE_ADDRESS_QUERY = `mutation($addressId: ID!, $stateId: ID, $regionId: ID, $neighborhoodId: ID, $streetId: ID, $areaId: ID, $target: String, $homeNumber: Int) {
        changeAddress(addressId: $addressId, stateId: $stateId, regionId: $regionId, neighborhoodId: $neighborhoodId, streetId: $streetId, areaId: $areaId, target: $target, homeNumber: $homeNumber){
          status
          message
          data
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

    const { addressId } = useContext(AuthContext);

    const [selectedState, setSelectedState] = useState();
    let [states, setStates] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedArea, setSelectedArea] = useState();
    const [selectedNeighborhood, setSelectedNeighborhood] = useState();
    const [selectedStreet, setSelectedStreet] = useState();
    const [selectedBranch, setSelectedBranch] = useState();
    let [target, setTarget] = useState();
    let [homeNumber, setPhoneNumber] = useState();

    // const [addressId, setAddressId] = useState();

    let [branches, setBranches] = useState();
    let [regions, setRegions] = useState();
    let [areas, setAreas] = useState();
    let [neighborhood, setNeighborhood] = useState();
    let [street, setStreet] = useState();
    let [isLoading, setLoading] = useState(true);
    let [userToken, setUserToken] = useState("");

    const height = Dimensions.get("window").height;

    const onSuccess = () => {
        Alert.alert("Ma'lumotlar muvaffaqiyatli o'zgartirildi!", "", [
            {
                text: "OK",
                onPress: () => navigation.goBack(),
                style: "cancel",
            },
        ]);
    };

    const confirmAlert = () => {
        Alert.alert("Ma'lumotlaringizni o'zgartirishni istaysizmi?", "", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel",
            },
            {
                text: "OK",
                onPress: async () => {
                    let { changeAddress } = await request(
                        CHANGE_ADDRESS_QUERY,
                        {
                            addressId: addressId.address.addressId,
                            stateId: selectedState,
                            regionId: selectedRegion,
                            neighborhoodId: selectedNeighborhood,
                            streetId: selectedState,
                            areaId: selectedArea,
                            target: target,
                            homeNumber: parseInt(homeNumber),
                        },
                        userToken
                    );
                    if (changeAddress.status == 200) onSuccess();
                },
            },
        ]);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("user_token");
                // const id = await AsyncStorage.getItem("addressId");
                setUserToken(value);
                // setAddressId(id);
                console.log(addressId);
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

    useEffect(() => {
        async function fetchNeighborhood() {
            try {
                setNeighborhood(
                    await request(
                        GET_NEIGHBORHOOD_QUERY,
                        { regionId: selectedRegion },
                        userToken
                    )
                );
            } catch (error) {
                console.log(error);
            }
        }
        fetchNeighborhood();
    }, [selectedRegion]);

    useEffect(() => {
        async function fetchStreet() {
            try {
                setStreet(
                    await request(
                        GET_STREET_QUERY,
                        { neighborhoodId: selectedNeighborhood },
                        userToken
                    )
                );
            } catch (error) {
                console.log(error);
            }
        }
        fetchStreet();
    }, [selectedNeighborhood]);

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
        <View>
            <ScrollView
                style={{ ...styles.container, padding: 0 }}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {isLoading ? (
                    <View
                        style={{
                            flex: 1,
                            height: height,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ActivityIndicator
                            size="large"
                            color="#2196F3"
                            style={{ alignSelf: "center" }}
                        />
                    </View>
                ) : (
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            Manzilni o'zgartirish
                        </Text>

                        <View style={styles.infoWrapper}>
                            {/* Branch input ----------------------------------------------- */}
                            <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Filial</Text>
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

                            {/* State input ------------------------------------ */}
                            <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Shahar</Text>
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

                            {/* Neighborhood input ------------------------------------------ */}
                            <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>
                                        Mahalla/Qishloq
                                    </Text>
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
                                                      label={
                                                          value.neighborhoodName
                                                      }
                                                      value={
                                                          value.neighborhoodId
                                                      }
                                                  />
                                              )
                                          )
                                        : []}
                                </Picker>
                            </View>

                            {/* Area input ------------------------------------------ */}
                            <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Hudud</Text>
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
                            </View>

                            {/* Street input ------------------------------------------ */}
                            <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Ko'cha</Text>
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
                            </View>

                            {/* Target options --------------------------------------------- */}
                            <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <TextInput
                                    style={styles.input}
                                    numberOfLines={1}
                                    placeholder="Mo'ljalni kiriting"
                                    placeholderTextColor="#B8B8BB"
                                    onChangeText={(value) => setTarget(value)}
                                    keyboardType="default"
                                    // autoFocus={true}
                                    maxLength={9}
                                />
                            </View>

                            {/* Home Number input ----------------------------------------------------- */}
                            <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <TextInput
                                    style={styles.input}
                                    numberOfLines={1}
                                    placeholder="Uy raqamini kiriting"
                                    placeholderTextColor="#B8B8BB"
                                    onChangeText={(value) =>
                                        setPhoneNumber(value)
                                    }
                                    keyboardType="default"
                                    // autoFocus={true}
                                    maxLength={9}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.confirmEditInfoBtn}
                            onPress={confirmAlert}
                        >
                            <Text style={styles.confirmEditInfoChanged}>
                                Tasdiqlash
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>

            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default EditLocation;
