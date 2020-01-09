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
  data = this.props.navigation.state.params.assignedhires;
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    console.log(this.data)
  }

  render() {
    return (
      <View>
        <Text> HireAssignment </Text>
      </View>
    );
  }
}
