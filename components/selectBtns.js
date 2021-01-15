import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export class SelectBtn extends Component {

    render() {
        const { selectedItemIndex, setSelectedItemIndex } = this.props

        return(
            <View style={styles.navBtns}>
                <Button 
                    title="Prev"
                    onPress={() => {
                        setSelectedItemIndex(( selectedItemIndex <= 0 ) ? selectedItemIndex : selectedItemIndex - 1)
                    }}
                />
                <Text>{ selectedItemIndex + 1 }</Text>
                <Button 
                    title="Next"
                    onPress={() => {
                        // 10 should be users.length
                        setSelectedItemIndex((selectedItemIndex + 1 >= 10) ? selectedItemIndex : selectedItemIndex + 1)
                    }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    navBtns: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})