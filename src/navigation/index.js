import React from "react";
import { AuthProvider } from "./AuthProvider.js";
import Routes from "./Routes";

export default function Providers(props) {
    
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
};



