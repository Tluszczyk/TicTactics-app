import { WrapperProps } from "../../common/props";
import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

import { API } from "../../api/API";

interface AuthViewProps extends WrapperProps {}

export const AuthView = (props: AuthViewProps) => {
    const [name, setName] = useState("test");
    const [email, setEmail] = useState("test@test.com")
    const [password, setPassword] = useState("testpass");
    const [response, setResponse] = useState("");

    const handleSubmit = async () => {
        API.auth.signin({
            name: name,
            email: email,
            password: password
        }).then((response) => {
            setResponse(JSON.stringify(response.body ?? "OK"));

        }).catch((error) => {
            console.log(error);
            setResponse(JSON.stringify(error));
        })
    };

    return (
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
    );
}

