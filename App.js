import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Providers from "./src/navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://pokiza-rebuilding.herokuapp.com/graphql',
});

const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await AsyncStorage.getItem('user_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            token: token ? `${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Providers />
        </ApolloProvider>
    );
}

