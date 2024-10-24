import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";
import { Stack } from 'expo-router';
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

export default function RootLayout() {
    return (
        <Authenticator.Provider>
            <Authenticator>
                <Stack>
                    <Stack.Screen
                        name="index"
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack>
            </Authenticator>
        </Authenticator.Provider>
    );
}