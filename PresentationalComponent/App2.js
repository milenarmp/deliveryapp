import React from 'react';
import { StyleSeet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent/PresentationalComponent'

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

import React from 'react'
import { View, StyleSheet } from 'react-native'

const Home = (props) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.redbox}></View>
      <View style = {styles.bluebox}></View>
      <View style = {styles.blackbox}></View>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'grey',
    height: 600
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'pink'
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
})

import React from 'react'
import List from './List.js'

const App = () => {
  return (
    <List />
  )
}
export default App