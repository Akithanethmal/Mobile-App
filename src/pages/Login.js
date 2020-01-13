import React, { Component }from 'react';
import { View,StyleSheet} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class  Login extends Component {
  static navigationOptions = {
    header:null
  }
  render(){
    
    return (
      
      <View style={styles.container}>
          <Logo/>
          <Form type="Login" navigation={this.props.navigation}/>
      </View>
      
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#191919',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 40
    //edting
    },
    
    
});
