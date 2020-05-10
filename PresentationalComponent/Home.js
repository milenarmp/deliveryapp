import React, { Component } from 'react'
import { Text, View} from 'react-native'

class Home extends Component {
    state = {
        meuState: 'Bláblá'
    }
    atualizaState = () => this.setState({ meuState: 'Atulizou'})
    render(){
        return (
            <View>
                <Text onPress={this.atualizaState}>
                    {this.state.meuState}
                </Text>
            </View>
        );
    }
}
export default Home;