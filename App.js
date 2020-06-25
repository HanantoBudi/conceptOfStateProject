/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state={
      obj: 'Understand the concept of State',
    }
  }
  changeState() {
    //Alert.alert('You tapped the button!')
    this.setState({
      obj: 'Object State is changed now',
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.obj}
        </Text>
        <Button 
          onPress={()=>this.changeState()} 
          title="Click"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
