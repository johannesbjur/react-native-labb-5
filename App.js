import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserList } from './components/userList'
import { UserInfo } from './components/userInfo'
import { SelectBtn } from './components/selectBtns';


export default function App() {

    const [selectedItem, setSelectedItem] = useState({})
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Candidates</Text>
        <UserList
            setSelectedItem={setSelectedItem}
            selectedItemIndex={selectedItemIndex}
            setSelectedItemIndex={setSelectedItemIndex}
        />
        <UserInfo 
            selectedItem={selectedItem}
        />
        <SelectBtn
            setSelectedItemIndex={setSelectedItemIndex}
            selectedItemIndex={selectedItemIndex}
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
