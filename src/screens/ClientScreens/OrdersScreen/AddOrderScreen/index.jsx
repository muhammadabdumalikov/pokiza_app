import React from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const AddOrderScreen = ({ navigation }) => {
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

    return (
        <View style={styles.containerWrapper}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentStyle}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        flex: 6,
                        borderBottomColor: "gray",
                        borderBottomWidth: 0.9,
                        paddingBottom: 20,
                    }}
                >
                    <View style={styles.inputContainer}>
                        <Text>Ism:</Text>
                        <TextInput placeholder="Abdujalilov Abdulaziz" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>Telefon:</Text>
                        <TextInput placeholder="+99896084443" />
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>State</Text>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={stateModalVisible}
                            onRequestClose={() => {
                                setStateModalVisible(!stateModalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalWrapper}>
                                    <FlatList
                                        data={states.states}
                                        renderItem={modalState}
                                        keyExtractor={(item) => item.stateId}
                                        contentContainerStyle={styles.modalView}
                                        style={styles.contenModalView}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() =>
                                        setStateModalVisible(!stateModalVisible)
                                    }
                                >
                                    <Text style={styles.hideModalButton}>
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
                                    : "Add State"}
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Address</Text>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={regionModalVisible}
                            onRequestClose={() => {
                                setRegionModalVisible(!regionModalVisible);
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
                                        keyExtractor={(item) => item.regionId}
                                        contentContainerStyle={styles.modalView}
                                        style={styles.contenModalView}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() =>
                                        setRegionModalVisible(
                                            !regionModalVisible
                                        )
                                    }
                                >
                                    <Text style={styles.hideModalButton}>
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
                                    : "Add Region"}
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.preTextWrapperStyle}>
                            <Text style={styles.preText}>Address</Text>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={regionModalVisible}
                            onRequestClose={() => {
                                setRegionModalVisible(!regionModalVisible);
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
                                        keyExtractor={(item) => item.regionId}
                                        contentContainerStyle={styles.modalView}
                                        style={styles.contenModalView}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() =>
                                        setRegionModalVisible(
                                            !regionModalVisible
                                        )
                                    }
                                >
                                    <Text style={styles.hideModalButton}>
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
                                    : "Add Region"}
                            </Text>
                        </Pressable>
                        <Text>Hudud</Text>
                        <TextInput />
                    </View>
                </View>

                <View style={styles.tariffBox}>
                    <View style={styles.inputContainer}>
                        <Text>1</Text>
                        <TextInput />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>1</Text>
                        <TextInput />
                    </View>
                </View>

                <View style={styles.dateInfoBox}>
                    <View style={styles.inputContainer}>
                        <Text>1</Text>
                        <TextInput />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>1</Text>
                        <TextInput />
                    </View>
                </View>
                <TouchableOpacity style={styles.sendCodeWrapper}>
                    <Text style={styles.sendCodeText}>Buyurtma berish</Text>
                </TouchableOpacity>
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

export default AddOrderScreen;
