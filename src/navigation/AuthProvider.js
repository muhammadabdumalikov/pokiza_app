import React, { createContext, useState } from "react";
import { Text } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
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
