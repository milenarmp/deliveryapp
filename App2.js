import React from 'react';
import { StyleSeet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'

export default class App2 extends React.Component {
    state = {
        meuState: 'bláblá'
    }
    atualizaState = () => {
        this.setState({ meuState: 'Atualizou'})
    }
    render () {
        return(
            <View>
                <PresentationalComponent meuState = {this.state.meuState} atualizaState = {this.atualizaState}></PresentationalComponent>
            </View>
        );
    }
}