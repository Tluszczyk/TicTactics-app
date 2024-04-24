import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput } from "react-native";

import { BaseView } from "../BaseView/BaseView"; 
import { NavigationProps } from "../../common/props";

import { useAuth } from "../../providers/AuthenticationProvider";

import { API } from "../../api/API";

type AuthViewProps = NavigationProps<"Auth">

export const AuthView = (props: AuthViewProps) => {
    const { isAuthenticated, setIsAuthenticated, setUserId } = useAuth();

    useEffect(() => {
        if( isAuthenticated ) props.navigation.navigate("Home");
    }, [isAuthenticated]);

    const [name, setName] = useState("test");
    const [email, setEmail] = useState("test@test.com")
    const [password, setPassword] = useState("testpass");
    const [response, setResponse] = useState("");

    const handleSubmit = async () => {
        API.auth.signin({
            name: name,
            email: email,
            password: password

        }).then(([isAuthenticated, userId]) => {
            console.log(`isAuthenticated, userId: ${isAuthenticated}, ${userId}`);

            setUserId(userId)
            setIsAuthenticated(isAuthenticated);

            setResponse("success");
        
        }).catch(e => console.log(e.message));
    };

    return (
        <BaseView requiresAuth={false} {...props}>
            <View>
                <Text>Auth View</Text>
                <Text>Name:</Text>
                <TextInput
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Text>Email:</Text>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text>Password:</Text>
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                />
                <Button title="Submit" onPress={handleSubmit} />
                <Text>Response: {response}</Text>
            </View>
        </BaseView>
    );
}

