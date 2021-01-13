import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserList } from './components/userList'

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Candidates</Text>
        <UserList />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10
    }
});
