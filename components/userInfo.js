import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export class UserInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userData: {}
        }
    }

    componentDidUpdate() {
        if( this.props.selectedItem == undefined || this.state.userData.id == this.props.selectedItem.id ) return

        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.selectedItem.id)
        .then(response => response.json())
        .then(json => {

            const item = {
                id: json.id, 
                name: json.name,
                email: json.email,
                phone: json.phone
            } 
            console.log('from didupdate: ', item)
            this.setState({
                userData: item
            })
        })
    }

    render() {
        const { selectedItem } = this.props
        const { userData } = this.state

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Candidate Info</Text>
                <Text>Name: { userData.name }</Text>
                <Text>Email: { userData.email }</Text>
                <Text>Phone: { userData.phone }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        height: '35%',
        backgroundColor: '#d3d3d3',
        padding: 15 
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
    
})