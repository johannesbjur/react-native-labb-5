import React, { Component ,useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export class UserList extends Component {

    // state = {
    //     users: []
    // }

    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            var array = []
            json.forEach( element => {
                var item = { id: element.id, name: element.name }
                array.push(item)
            })
            this.setState({
                users: array
            })
        })
    }

    handleItemPress(item) {
        console.log(item)
    }

    render() {
        const { users } = this.state

        return(
            <View style={styles.container}>
                <FlatList 
                    data={users}
                    renderItem={ ({item}) => (
                        <Text 
                            style={{...styles.listItem }}
                            onPress={() => this.handleItemPress(item)} 
                        >{item.name}</Text>
                )}
                />
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        height: '60%',
    },
    listItem: {
        padding: 10
    }
})