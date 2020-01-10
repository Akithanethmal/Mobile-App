import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HireAssignment extends Component {
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
  componentDidMount(){
    console.log(this.state.data)
  }

  render() {
    return (
      <View>
        <Text> HireAssignment </Text>
      </View>
    );
  }
}


