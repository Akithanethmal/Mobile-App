import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard';






export default class  App extends Component {
    render(){
        return (
          <View style={styles.container}>
              <Dashboard/>            
          </View>
        );
        }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191919',
      alignItems: 'center',
      justifyContent: 'center'
    }
      
      
  }); 