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
  data = this.props.navigation.state.params
  constructor(props) {
    super(props);  
  }
  state = {
    data:this.data.assignedhires,
  };
  componentDidMount(){
    console.log('hello')
    console.log(this.data);
    console.log(this.props.navigation)
    this.setState({data:this.data.assignedhires})
    console.log(this.state.data);
    
  }
  render() {
    return (
      <View>
        <Text> AssignedHires </Text>
        {/* {
        this.state.data.map((u,i)=>{
          return(<View>
            <Text>{u.hireStatus}</Text>
          </View>)
        })
        } */}
      </View>
    );
  }
}
