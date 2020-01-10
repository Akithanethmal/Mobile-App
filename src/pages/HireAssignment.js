import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
      <ScrollView>
        <Card style={styles.container}>
          <View>
            <Text> HireAssignment </Text>
          </View>
          <View>
            <Text h3>{this.state.data.hire.hireType.toUpperCase()}</Text>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
  })


