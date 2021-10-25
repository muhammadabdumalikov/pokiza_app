import React, { useContext, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

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
      addressId: $addressId
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
  `

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const AddAddress = ({ navigation }) => {
    const { firstName, lastName, gender, age } = useContext(AuthContext);
    const [selectedState, setSelectedState] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedArea, setSelectedArea] = useState();
    const [selectedBranch, setSelectedBranch] = useState();
    let state;
    let region;
    let branch;

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
            <View style={styles.personalDataBox}>
                {/* State input ------------------------------------ */}
                <View
                    style={styles.inputContainer}
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
                    style={styles.inputContainer}
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
                    style={styles.inputContainer}
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
                    style={styles.inputContainer}
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
                <View
                    style={styles.inputContainer}
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

                <TouchableOpacity
                    style={styles.sendCodeWrapper}
                    onPress={() => {
                        try {
                            let data = request(ADDRESS_QUERY, {
                                firstName: firstName,
                                lastName: lastName,
                                age: age,
                                gender: gender,
                                selected
                            })
                        } catch (error) {
                            
                        }
                    }}
                >
                    <Text style={styles.sendCodeText}>Send code</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default AddAddress;
