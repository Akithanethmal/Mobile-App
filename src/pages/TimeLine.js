import React, { Component } from "react";
import { View, Text } from "react-native";

export default class TimeLine extends Component {
  static navigationOptions = {
    title: "Time Line",
    headerTitleStyle: {
      fontSize: 25,
      flex: 1
    }
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> TimeLine </Text>
      </View>
    );
  }
}
