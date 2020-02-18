import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './navigation/Routes';
	
console.disableYellowBox = true;

export default class  App extends Component {
    render(){
        return (
          <Routes/>
        );
        }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',//#191919
      alignItems: 'center',
      justifyContent: 'center'
    }
      
      
  }); 