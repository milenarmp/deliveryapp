import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { exp } from 'react-native-reanimated'

class List extends Component {
    state = {
        nomes: [
            {
                id: 0,
                nome: 'Ben',
            },
            {
                id: 1,
                nome: 'Susan',
            },
            {
                id: 2,
                nome: 'Robert',
            },
            {
                id: 3,
                nome: 'Milena',
            }
        ]
    }
    alertItemNome = (item) => {
        alert(item.nome)
    }
    render(){
        return (
            <View>
                {
                    this.state.nomes.map((item, index) => (
                        <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            onPress = {() => this.alertItemNome(item)}>
                            <Text style = {styles.text}>
                                {item.nome}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}
export default List

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color:'#4f603c'
    }
})