import React, { createContext, useState } from "react";
import { Text } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [surname, setSurname] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();

    return (
        <AuthContext.Provider
            value={{
                name,
                setName,
                surname,
                setSurname,
                phoneNumber,
                setPhoneNumber,
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
