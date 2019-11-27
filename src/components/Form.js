import React ,{Component}from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native';

export default class  Form extends Component {
  render(){
    return (
      <ScrollView>
      <View style={styles.container}>
      <TextInput style={styles.inputbox} 
      underlineColorAndroid='rgba(0,0,0,0)' 
      placeholder="Email"
      selectionColor="#fff"
      keyboardType="email-address"
      placeholderTextColor='#000000'
      onSubmitEditing={()=> this.password.focus()}
      />

      
      <TextInput style={styles.inputbox} 
      underlineColorAndroid='rgba(0,0,0,0)'
      secureTextEntry={true} 
      placeholder="Password"
      placeholderTextColor='#000000'
      ref={(input)=>this.password=input}
      />

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>{this.props.type}</Text>

      </TouchableOpacity>
    
    </View>
    </ScrollView>
      
    );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'

      },

    inputbox:{
      width:375,
      height: 50,
      backgroundColor:'#ffff',
      borderRadius:25,
      paddingHorizontal:15,
      fontSize: 20,
      marginVertical:10
    },
    buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#fff',
      textAlign: 'center'  
    },
    button:{
      backgroundColor:'#2626FF',
      width:300,
      height: 50,
      borderRadius:25,
      marginVertical:10,
      paddingVertical:16
      
    }

   
      
    
  });