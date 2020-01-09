import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AssignedHires extends Component {
    static navigationOptions = {
        title: 'Assigned Hires',
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
        <Text> AssignedHires </Text>
      </View>
    );
  }
}
