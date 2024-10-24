import React from "react";
import { Button, View, StyleSheet, SafeAreaView } from "react-native";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import TodoList from "../src/TodoList";

const SignOutButton = () => {
    const { signOut } = useAuthenticator();
    return (
        <View style={styles.signOutButton}>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
};
export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <SignOutButton />
            <TodoList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    signOutButton: {
        alignSelf: "flex-end",
    },
});