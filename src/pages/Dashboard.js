import React, { Component }from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Image,Card,ScrollView } from 'react-native';


export default class  Dashboard extends Component{

    render(){
        return(
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.DashboardText}>Dashboard</Text>
        </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#191919',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 40,
      flex:1
      //edting
      },

      DashboardText:{
        fontSize:40,
        fontWeight: 'bold',
        color: '#fff',
        flex:1
    }
      
      
  });
  