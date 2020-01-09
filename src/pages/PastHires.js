import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PastHires extends Component {
    static navigationOptions = {
        title: 'Past Hires',
        headerTitleStyle: {
            fontSize:25,
            textAlign:"center", 
            flex:1 
        },  
    };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> PastHires </Text>
      </View>
    );
  }
}
