import React, { Component ,useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';


export class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            selectItemIndex: -1 
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

    render() {
        const { users, selectItemIndex } = this.state
        const { setSelectedItem } = this.props

        return(
            <View style={styles.container}>
                <FlatList 
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={ ({item, index}) => (
                        <Text 
                            style={{...styles.listItem, backgroundColor: selectItemIndex === index ? 'yellow' : 'white' }}
                            onPress={() => {
                                setSelectedItem(item)
                                this.setState({
                                    selectItemIndex: index 
                                })
                            }}
                            >{item.name}</Text>
                )}
                />
                <View style={styles.navBtns}>
                    <Button 
                        title="Prev"
                        onPress={() => {
                            // this.setState({
                            //     selectItemIndex: selectItemIndex - 1
                            // })
                            // setSelectedItem(users[selectItemIndex])
                        }}
                    />
                    <Text>{ selectItemIndex + 1 }</Text>
                    <Button 
                        title="Next"
                        onPress={() => {
                            // this.setState({
                            //     selectItemIndex: selectItemIndex + 1
                            // })
                            // setSelectedItem(users[selectItemIndex])
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        height: '50%',
    },
    listItem: {
        padding: 10
    }, 
    navBtns: {

    }
})