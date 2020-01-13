import React, { Component } from "react";
import { View, Text, Modal, TouchableHighlight } from "react-native";

export default class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.isVisible
    };
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}
