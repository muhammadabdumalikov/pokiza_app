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
    const [state, setState] = useState();
    const [region, setRegion] = useState();
    const [area, setArea] = useState();
    const [branch, setBranch] = useState();

    return (
        <AuthContext.Provider
            value={{
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
                state,
                setState,
                region,
                setRegion,
                area,
                setArea,
                branch,
                setBranch,
                login: async (password) => {
                    try {
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (phone) => {
                    try {
                    } catch (e) {
                        console.log(e);
                    }
                },
            }}
        >
            <AuthContext.Consumer>{() => children}</AuthContext.Consumer>
        </AuthContext.Provider>
    );
};
