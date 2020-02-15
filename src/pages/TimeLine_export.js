import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import { Icon, Card, Button } from "react-native-elements";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../../config/Firebase";

export default class TimeLine extends Component {
  static navigationOptions = {
    title: "EXPORT",
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
      <ScrollView style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Do")}
            >
              <Text style={styles.buttonText}>Hire Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Do")}
            >
              <Text style={styles.buttonText}>Loading Port Reached</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Do")}
            >
              <Text style={styles.buttonText}>In Transit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Do")}
            >
              <Text style={styles.buttonText}>Cargo Loaded</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Do")}
            >
              <Text style={styles.buttonText}>In Transit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Do")}
            >
              <Text style={styles.buttonText}>
                At Container Pickup Location
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Do")}
            >
              <Text style={styles.buttonText}>Truck Dispatched</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff", //#191919
    paddingVertical: 40
    //edting
  },
  DashboardTextContainer: {
    height: "10%",
    width: "100%",
    alignContent: "center",
    justifyContent: "center"
  },
  cardContainer: {
    flexShrink: 1,
    padding: 20,
    margin: 10,
    height: 500,
    width: "95%",
    justifyContent: "center",
    borderRadius: 10
  },
  button: {
    marginTop: 7,
    marginBottom: 7,
    paddingVertical: 3,
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    width: "100%",
    height: 50
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingVertical: 8
  }
});
