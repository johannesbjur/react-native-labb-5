import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentDidUpdate( prevProps, prevState ) {

        const { users } = this.state
        const { setSelectedItem, selectedItemIndex } = this.props

        if (prevState.selectedItemIndex == selectedItemIndex) return

        setSelectedItem(users[selectedItemIndex])
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

    render() {
        const { users } = this.state
        const { setSelectedItem, selectedItemIndex, setSelectedItemIndex } = this.props

        return(
            <View style={styles.container}>
                <FlatList 
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={ ({item, index}) => (
                        <Text 
                            style={{...styles.listItem, backgroundColor: selectedItemIndex === index ? 'yellow' : 'white' }}
                            onPress={() => {
                                setSelectedItem(item)
                                setSelectedItemIndex(index)
                            }}
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
        height: '45%',
    },
    listItem: {
        padding: 10
    }, 
    navBtns: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})