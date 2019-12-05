import React ,{Component}from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class  Logo extends Component {
    render(){
        return (
            <View style={styles.container}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require('../Images/LOGO.png')}
            />
            <Text style={styles.LogoText}>Trans Global Logistics</Text>
          </View>
        );
        }
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 100,
        //marginTop: 10,: 
        alignSelf: "center"
    },
    container:{
        flex:1,
        //justifyContent: 'flex-end',
        //alignItems:'center'
     },
    LogoText:{
        fontSize:40,
        fontWeight: 'bold',
        color: '#fff',
        textAlign:'center'
    }
    
  });


      
