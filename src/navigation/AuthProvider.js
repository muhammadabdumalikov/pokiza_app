import React, { createContext, useState } from "react";
import { Text } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [code, setCode] = useState(null);
    const [addressId, setAddressId] = useState();
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                age,
                setAge,
                gender,
                setGender,
                phoneNumber,
                setPhoneNumber,
                code,
                setCode,
                addressId,
                setAddressId
            }}
        >
            <AuthContext.Consumer>{() => children}</AuthContext.Consumer>
        </AuthContext.Provider>
    );
};
