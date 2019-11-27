import React, { Component }from 'react';
import {Card} from 'react-native-shadow-cards';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Image,ScrollView } from 'react-native';


export default class  Dashboard extends Component{

    render(){
        return(
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.DashboardText}>Dashboard</Text>
        <Card style={styles.upcardContainer}>
        <View style={styles.subContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.props.navigation.navigate('AssignedHires')
                        }}>
                        <Text style={styles.buttonText}>ASSIGNED HIRES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.props.navigation.navigate('UpcomingHires');
                        }}>
                        <Text style={styles.buttonText}>UPCOMING HIRES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.props.navigation.navigate('PastHires');
                        }}>
                            <Text style={styles.buttonText}>PAST HIRES</Text>
                        </TouchableOpacity>
                    </View>
      </Card>
     
      <Card style={styles.downcardContainer}>
      <Text>Hello</Text>
      </Card>
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
    },
    upcardContainer: {
        flex: 1,
        padding: 100, 
        margin: 10, 
        height: 50
    },
    subContainer: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC',
    },
    button: {
        marginTop: 7,
        marginBottom: 7,
        paddingVertical: 3,
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        width: '100%',
        height: 50,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 8
    }    
      
      
  });
  