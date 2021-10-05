import React from "react";
import { AuthProvider } from "./AuthProvider.android.js";
import Routes from "./Routes";

export default function Providers(props) {
    
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
};



