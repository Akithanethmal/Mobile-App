import React, { Component }from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Image } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class  Login extends Component {
render(){
  <ScrollView>
  return (
    <View style={styles.container}>
        <Logo/>
        <Form type="Login"/>
    </View>
  );
  </ScrollView>
  
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
    //edting
    },
    
    
});
