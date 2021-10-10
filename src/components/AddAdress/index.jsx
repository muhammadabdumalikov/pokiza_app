import React, { useState, useContext } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { AuthContext } from "../../navigation/AuthProvider.js";
import { styles } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const AddAdressData = () => {
    const { setRegion, setBranch, setArea, setState } = useContext(AuthContext);
    const [selectedState, setSelectedState] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedArea, setSelectedArea] = useState();
    const [selectedBranch, setSelectedBranch] = useState();
    let state;
    let region;
    let branch;

    return (
        <View style={styles.personalDataBox}>
            {/* State input ------------------------------------ */}
            <View
                style={{ ...styles.inputContainer }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.preTextWrapperStyle}>
                    <Text style={styles.preText}>State</Text>
                </View>
                <Picker
                    style={styles.pickerStyle}
                    selectedValue={selectedState}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedState(itemValue)
                    }
                >
                    <Picker.Item label="18" value="18" />
                    <Picker.Item label="20" value="20" />
                </Picker>
            </View>

            {/* Region input ------------------------------------------ */}
            <View
                style={{ ...styles.inputContainer }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.preTextWrapperStyle}>
                    <Text style={styles.preText}>Region</Text>
                </View>
                <Picker
                    style={styles.pickerStyle}
                    selectedValue={selectedRegion}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedRegion(itemValue)
                    }
                >
                    <Picker.Item label="18" value="18" />
                    <Picker.Item label="20" value="20" />
                </Picker>
            </View>

            {/* Area input ------------------------------------------ */}
            <View
                style={{ ...styles.inputContainer }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
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
                    <Picker.Item label="18" value="18" />
                    <Picker.Item label="20" value="20" />
                </Picker>
            </View>

            {/* Area options --------------------------------------------- */}
            <View
                style={{ ...styles.inputContainer, bottom: height / 4.42 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.preTextWrapperStyle}>
                    <Text style={styles.preText}>Name</Text>
                </View>
                <TextInput
                    style={styles.input}
                    numberOfLines={1}
                    placeholder="Enter first name"
                    placeholderTextColor="#B8B8BB"
                    onChangeText={(value) => (firstname = value)}
                    keyboardType="default"
                    // autoFocus={true}
                    maxLength={9}
                />
            </View>
            {/* Age input ----------------------------------------------- */}
            {/* <View
                style={{
                    ...styles.inputContainer,
                    bottom: height / 4.07,
                    right: width * 0.52,
                    width: "48%",
                }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.preTextWrapperStyle}>
                    <Text style={styles.preText}>Age</Text>
                </View>
                <Picker
                    style={{ height: 50, width: 120 }}
                    selectedValue={selectedAge}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedAge(itemValue)
                    }
                >
                    <Picker.Item label="18" value="18" />
                    <Picker.Item label="20" value="20" />
                </Picker>
            </View> */}

            {/* Gender input --------------------------------------------- */}
            {/* <View
                style={{
                    ...styles.inputContainer,
                    bottom: height / 4.07,
                    left: width * 0.52,
                    width: "48%",
                }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.preTextWrapperStyle}>
                    <Text style={styles.preText}>Gender</Text>
                </View>
                <Picker
                    style={{ height: 50, width: 120 }}
                    selectedValue={selectedGender}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedGender(itemValue)
                    }
                >
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>
            </View> */}

            <TouchableOpacity style={styles.sendCodeWrapper} onPress={() => {}}>
                <Text style={styles.sendCodeText}>Send code</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddAdressData;
