import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserList } from './components/userList'
import { UserInfo } from './components/userInfo'


export default function App() {

    const [selectedItem, setSelectedItem] = useState({})

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Candidates</Text>
        <UserList
            setSelectedItem={setSelectedItem} 
        />
        <UserInfo 
            selectedItem={selectedItem}
        />
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
