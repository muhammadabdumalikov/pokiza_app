import React, { useContext, useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Modal,
    FlatList,
    ActivityIndicator,
    Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AuthContext } from "../../../../navigation/AuthProvider";

import styles from "./styles";
import { request } from "../../../../helpers/request";

const AddOrderScreen = ({ navigation }) => {
    const { addressId } = useContext(AuthContext);
    const [selectedState, setSelectedState] = useState();
    let [states, setStates] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    let [regions, setRegions] = useState();
    let [selectedArea, setSelectedArea] = useState();
    let [areas, setAreas] = useState();
    let [isLoading, setLoading] = useState(true);
    let [userToken, setUserToken] = useState();

    let [selectedDate, setSelectedDate] = useState(
        new Date().toLocaleDateString()
    );

    let [selectedTariff, setSelectedTariff] = useState();

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [stateModalVisible, setStateModalVisible] = useState(false);
    const [regionModalVisible, setRegionModalVisible] = useState(false);
    const [areaModalVisible, setAreaModalVisible] = useState(false);
    const [tariffModalVisible, setTariffModalVisible] = useState(false);

    const tariffs = [
        { id: "1", tariffName: "Tezkor", value: true },
        { id: "2", tariffName: "Oddiy", value: false },
    ];

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

    const GET_AREAS_QUERY = `
        query($regionId: ID!){
            areas(regionId: $regionId){
                areaId
                areaName
            }
        }`;

    const GET_ADDRESS_ID_QUERY = `query($addressId: ID!){
        addresses (addressId: $addressId){
          addressId
          branch{
            branchId
            branchName
          }
        }
      }`;

    const ADD_ORDER_QUERY = `mutation($branchId: ID!, $addressId: ID!, $orderSpecial: Boolean!, $orderBringTime: DateTime!, $orderDeliveryTime: DateTime!, $orderSummary: String){
        clientAddOrder(branchId: $branchId, addressId: $addressId, orderSpecial: $orderSpecial, orderBringTime: $orderBringTime, orderDeliveryTime: $orderDeliveryTime, orderSummary: $orderSummary){
          status
          message
          data
        }
      }`;

    useEffect(() => {
        async function fetchData() {
            try {
                const value = await AsyncStorage.getItem("user_token");
                console.log(value);
                setUserToken(
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblN0YWZmIjpmYWxzZSwidG9rZW5DbGllbnQiOnRydWUsInVzZXJfaWQiOiIxNSIsImFkZHJlc3NfaWQiOiIzNiIsImJyYW5jaF9pZCI6IjEiLCJzdGFmZl9pZCI6bnVsbCwiY2xpZW50X2lkIjoiNyIsImlzX3JlZ2lzdGVyZWQiOnRydWUsInN0YWZmIjpmYWxzZSwiY2xpZW50Ijp0cnVlLCJpYXQiOjE2MzgxNjUzMDF9.ZKPli1jycxmmWm9fu-FxKwYFSo1xQRAzZlpJyHYe2DA"
                );
                setStates(await request(GET_STATE_QUERY, null, userToken));
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                setRegions(
                    await request(
                        GET_REGION_QUERY,
                        { stateId: selectedState.stateId },
                        userToken
                    )
                );
                setSelectedRegion(null);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [selectedState]);

    useEffect(() => {
        async function fetchAreas() {
            try {
                setAreas(
                    await request(
                        GET_AREAS_QUERY,
                        { regionId: selectedRegion.regionId },
                        userToken
                    )
                );
            } catch (error) {
                console.log(error);
            }
        }
        fetchAreas();
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

    const modalArea = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedArea(item);
                    setAreaModalVisible(!areaModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.areaName}
                </Text>
            </TouchableOpacity>
        );
    };
    const modalTariff = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ width: "80%", paddingVertical: 15 }}
                onPress={() => {
                    setSelectedTariff(item.value);
                    setTariffModalVisible(!tariffModalVisible);
                }}
            >
                <Text style={{ flex: 1, fontSize: 15, color: "#2196F3" }}>
                    {item.tariffName}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <>
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
                        color="#2196F3"
                        style={{ alignSelf: "center" }}
                    />
                </View>
            ) : (
                <View style={styles.containerWrapper}>
                    <ScrollView
                        style={styles.container}
                        contentContainerStyle={styles.contentStyle}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.infoBox}>
                            <View style={styles.inputContainer}>
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Viloyat:</Text>
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
                                                Hide Modal
                                            </Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                                <Pressable
                                    style={styles.buttonOpen}
                                    onPress={() => setStateModalVisible(true)}
                                >
                                    <Text style={styles.textStyle}>
                                        {selectedState != undefined
                                            ? selectedState.stateName
                                            : "Viloyatni tanlang"}
                                    </Text>
                                </Pressable>
                            </View>
                            <View
                                style={{
                                    ...styles.inputContainer,
                                    borderBottomWidth: 0,
                                }}
                            >
                                <View style={styles.preTextWrapperStyle}>
                                    <Text style={styles.preText}>Tuman:</Text>
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
                                                    regions != undefined
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
                                                Hide Modal
                                            </Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                                <Pressable
                                    style={styles.buttonOpen}
                                    onPress={() => setRegionModalVisible(true)}
                                >
                                    <Text style={styles.textStyle}>
                                        {selectedRegion != undefined
                                            ? selectedRegion.regionName
                                            : "Tumanni tanlang"}
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                        <View style={styles.tariffBox}>
                            <View
                                style={{
                                    ...styles.inputContainer,
                                    borderBottomWidth: 0,
                                }}
                            >
                                <Text style={styles.preText}>Tariff:</Text>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={tariffModalVisible}
                                    onRequestClose={() => {
                                        setTariffModalVisible(
                                            !tariffModalVisible
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
                                                data={tariffs}
                                                renderItem={modalTariff}
                                                keyExtractor={(item) => item.id}
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
                                                setTariffModalVisible(
                                                    !tariffModalVisible
                                                )
                                            }
                                        >
                                            <Text
                                                style={styles.hideModalButton}
                                            >
                                                Hide Modal
                                            </Text>
                                        </Pressable>
                                    </View>
                                </Modal>
                                <Pressable
                                    style={styles.buttonOpen}
                                    onPress={() => setTariffModalVisible(true)}
                                >
                                    <Text style={styles.textStyle}>
                                        {selectedTariff != undefined
                                            ? selectedTariff.tariffName
                                            : "Tariffni tanlang"}
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.dateAddInfoWrapper}>
                            <Text style={styles.dateAddInfo}>
                                <Text style={styles.attention}>*</Text>
                                Buyurtmangiz qachon olib ketilsin?
                            </Text>
                        </View>
                        <View style={styles.dateInfoBox}>
                            <View
                                style={{
                                    ...styles.inputContainer,
                                    borderBottomWidth: 0,
                                }}
                            >
                                <Text style={styles.preText}>Sana:</Text>
                                <TouchableOpacity
                                    onPress={() =>
                                        setDatePickerVisibility(true)
                                    }
                                >
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            color: "#2196F3",
                                        }}
                                    >
                                        {selectedDate}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {/* Modal DatePickers -------------------------------------------- */}
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="datetime"
                                onCancel={() => setDatePickerVisibility(false)}
                                onConfirm={(date) => {
                                    setSelectedDate(date.toLocaleString());
                                    setDatePickerVisibility(false);
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.sendCodeWrapper}
                            onPress={async() => {
                                const branchId = await request(
                                    GET_ADDRESS_ID_QUERY,
                                    { addressId: "36" },
                                    userToken
                                );
                                const addOrder = await request(ADD_ORDER_QUERY, {branchId: branchId, addressId: "36", orderSpecial: selectedTariff,})
                            }}
                        >
                            <Text style={styles.sendCodeText}>
                                Buyurtma berish
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <TouchableOpacity
                        style={styles.fab}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="ios-arrow-back"
                            size={28}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

export default AddOrderScreen;
