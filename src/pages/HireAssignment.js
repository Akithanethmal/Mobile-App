import React, { Component }from 'react';
import {Card,Button} from 'react-native-elements'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image,ScrollView } from 'react-native';


export default class  Dashboard extends Component{
    static navigationOptions = {
        title: 'Hire Assignments',
        headerTitleStyle: {
            fontSize:25,
            textAlign:"center", 
            flex:1 
        },  
    };
    render(){
        return(
            <ScrollView style={styles.container}>
        
                <Card containerStyle={styles.upcardContainer}>
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
                
                <Card containerStyle={styles.downcardContainer}>
                    <View>
                        <Text style = {{fontSize:35,fontWeight:'bold',padding:10}}>Ongoing Hire</Text>
                        <Text style = {{fontSize:20,paddingVertical:5,paddingHorizontal:10, borderBottomWidth:2, borderBottomColor:'#ccc',marginBottom:10}}>There is no hire assigned for today! Party hard man...</Text>
                    </View>
                    <Button
                        title='Party Hard'
                        type='solid'
                        raised
                        buttonStyle={styles.partyhardbutton}
                    />
                </Card>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'column',
      backgroundColor: '#fff',//#191919
      paddingVertical:40
      //edting
      },
      DashboardTextContainer:{
          height:'10%',
          width:'100%',
          alignContent:'center',
          justifyContent:'center'
      },
      DashboardText:{
        textAlign:"center",
        fontSize:40,
        fontWeight: 'bold',
        color: '#000',
        justifyContent:'center',
        
    },
    upcardContainer: {
        flexShrink:1,
        padding: 20, 
        margin: 10, 
        height: 275,
        width:'95%',
        justifyContent:'center',
        borderRadius:10,
    },
    subContainer: {
        width:'100%',
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
    }  ,
    downcardContainer:{
        flexShrink:1,
        width:'95%',
        borderRadius:10
    },
    partyhardbutton:{
        backgroundColor:'#0b7a07'
    } 
      
  });
  