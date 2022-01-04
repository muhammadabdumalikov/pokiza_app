import React, { useContext, useEffect, useState } from "react";
import {
    View,
    Text,
    Pressable,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
    Image,
    Modal,
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
    const { firstName, lastName, gender, age, setAddressId, setUser } =
        useContext(AuthContext);
    const [selectedState, setSelectedState] = useState();
    let [states, setStates] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    let [regions, setRegions] = useState();
    const [selectedBranch, setSelectedBranch] = useState();
    let [branches, setBranches] = useState();
    let [isLoading, setLoading] = useState(true);
    let [userToken, setUserToken] = useState("");

    const [stateModalVisible, setStateModalVisible] = useState(false);
    const [regionModalVisible, setRegionModalVisible] = useState(false);
    const [branchModalVisible, setBranchModalVisible] = useState(false);

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
                        { stateId: selectedState.stateId },
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
        async function fetchBranches() {
            try {
                setBranches(
                    await request(
                        GET_BRANCHES_QUERY,
                        { regionId: selectedRegion.regionId },
                        userToken
                    )
                );
            } catch (error) {
                console.log(error);
            }
        }
        fetchBranches();
    }, [selectedRegion]);

    const modalState = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedState(item);
                    setStateModalVisible(!stateModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.stateName}
                </Text>
            </TouchableOpacity>
        );
    };

    const modalRegion = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedRegion(item);
                    setRegionModalVisible(!regionModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.regionName}
                </Text>
            </TouchableOpacity>
        );
    };

    const modalBranch = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedBranch(item.branch);
                    setBranchModalVisible(!branchModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.branch.branchName}
                </Text>
            </TouchableOpacity>
        );
    };

    // console.log(branches)

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
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
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={stateModalVisible}
                                    onRequestClose={() => {
                                        setStateModalVisible(
                                            !stateModalVisible
                                        );
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalWrapper}>
                                            <FlatList
                                                data={
                                                    states ? states.states : []
                                                }
                                                renderItem={modalState}
                                                keyExtractor={(item) =>
                                                    item.stateId
                                                }
                                                contentContainerStyle={
                                                    styles.modalView
                                                }
                                                style={styles.contenModalView}
                                                showsVerticalScrollIndicator={
                                                    false
                                                }
                                            />
                                        </View>
                                        <Pressable
                                            style={[
                                                styles.button,
                                                styles.buttonClose,
                                            ]}
                                            onPress={() =>
                                                setStateModalVisible(
                                                    !stateModalVisible
                                                )
                                            }
                                        >
                                            <Text
                                                style={styles.hideModalButton}
                                            >
                                                Yopish
                                            </Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                                <Pressable
                                    style={styles.buttonOpen}
                                    onPress={() => setStateModalVisible(true)}
                                >
                                    <Text style={styles.textStyle}>
                                        {selectedState
                                            ? selectedState.stateName
                                            : "Shaharni tanlang"}
                                    </Text>
                                </Pressable>
                            </View>

                            {/* Region input ------------------------------------------ */}
                            <View
                                style={styles.inputContainer}
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>
                                        Shahar / Tuman
                                    </Text>
                                </View>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={regionModalVisible}
                                    onRequestClose={() => {
                                        setRegionModalVisible(
                                            !regionModalVisible
                                        );
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalWrapper}>
                                            <FlatList
                                                data={
                                                    regions
                                                        ? regions.regions
                                                        : []
                                                }
                                                renderItem={modalRegion}
                                                keyExtractor={(item) =>
                                                    item.regionId
                                                }
                                                contentContainerStyle={
                                                    styles.modalView
                                                }
                                                style={styles.contenModalView}
                                                showsVerticalScrollIndicator={
                                                    false
                                                }
                                            />
                                        </View>
                                        <Pressable
                                            style={[
                                                styles.button,
                                                styles.buttonClose,
                                            ]}
                                            onPress={() =>
                                                setRegionModalVisible(
                                                    !regionModalVisible
                                                )
                                            }
                                        >
                                            <Text
                                                style={styles.hideModalButton}
                                            >
                                                Yopish
                                            </Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                                <Pressable
                                    style={styles.buttonOpen}
                                    onPress={() => setRegionModalVisible(true)}
                                >
                                    <Text style={styles.textStyle}>
                                        {selectedRegion
                                            ? selectedRegion.regionName
                                            : "Tumanni tanlang"}
                                    </Text>
                                </Pressable>
                            </View>

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
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={branchModalVisible}
                                    onRequestClose={() => {
                                        setBranchModalVisible(
                                            !branchModalVisible
                                        );
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View
                                            style={[
                                                styles.modalWrapper,
                                                styles.tariffModalWrapper,
                                            ]}
                                        >
                                            <FlatList
                                                data={
                                                    branches
                                                        ? branches.regions
                                                        : []
                                                }
                                                renderItem={modalBranch}
                                                keyExtractor={(item) =>
                                                    item.branchId
                                                }
                                                contentContainerStyle={
                                                    styles.modalView
                                                }
                                                style={styles.contenModalView}
                                                showsVerticalScrollIndicator={
                                                    false
                                                }
                                            />
                                        </View>
                                        <Pressable
                                            style={[
                                                styles.button,
                                                styles.buttonClose,
                                            ]}
                                            onPress={() =>
                                                setBranchModalVisible(
                                                    !branchModalVisible
                                                )
                                            }
                                        >
                                            <Text
                                                style={styles.hideModalButton}
                                            >
                                                Yopish
                                            </Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                                <Pressable
                                    style={styles.buttonOpen}
                                    onPress={() => setBranchModalVisible(true)}
                                    // disabled={true}
                                >
                                    <Text style={styles.textStyle}>
                                        {selectedBranch
                                            ? selectedBranch.branchName
                                            : "Filialni tanlang"}
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.sendCodeWrapper}
                            onPress={async () => {
                                try {
                                    let addAddress = await request(
                                        MUTATION_ADD_ADDRESS,
                                        {
                                            stateId: selectedState.stateId,
                                            regionId: selectedRegion.regionId,
                                        },
                                        userToken
                                    );
                                    console.log(userToken);
                                    let { registerClient } = await request(
                                        MUTATION_REGISTER_CLIENT,
                                        {
                                            firstName: firstName,
                                            lastName: lastName,
                                            age: +age,
                                            gender: +gender,
                                            branchId: selectedBranch.branchId,
                                            addressId:
                                                addAddress.addAddress.data
                                                    .address_id,
                                        },
                                        userToken
                                    );

                                    setAddressId(
                                        await request(
                                            GET_ADDRESS_ID_QUERY,
                                            null,
                                            registerClient.token
                                        )
                                    );

                                    if (registerClient.data.is_registered) {
                                        setUser(registerClient.data);
                                        AsyncStorage.setItem(
                                            "user_token",
                                            registerClient.token
                                        );
                                        await AsyncStorage.setItem(
                                            "clientId",
                                            registerClient.data.user_id
                                        );
                                        // console.log(registerClient)
                                        navigation.reset({
                                            index: 0,
                                            routes: [
                                                {
                                                    name: "App",
                                                },
                                            ],
                                        });
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
