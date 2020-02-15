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
  data = this.props.navigation.state.params;
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    id: "",
    modalVisible: false,
    doc: "",
    truckDispatched: "",
    inTransitOne: "",
    cargoLoaded: "",
    inTransitTwo: "",
    loadingPortReached: "",
    atContainerPickupLocation: "",
    hireCompleted: ""
  };
  componentDidMount() {
    this.setState({ id: this.data.ongoing }, () => this.getCurrentTimeline());
  }
  getCurrentTimeline = () => {
    firebase
      .firestore()
      .collection("hires")
      .doc(this.state.id)
      .get()
      .then(snapshot => {
        console.log(snapshot.data().timeline);
        timeline = snapshot.data().timeline;
        this.setState(timeline);
        console.log(this.state);
      });
  };
  timelineUpdate = async () => {
    timeline = {
      timeline: {
        truckDispatched:
          this.state.truckDispatched !== "" ? this.state.truckDispatched : "",
        atContainerPickupLocation:
          this.state.atContainerPickupLocation !== ""
            ? this.state.atContainerPickupLocation
            : "",
        inTransitOne:
          this.state.inTransitOne !== "" ? this.state.inTransitOne : "",
        cargoLoaded:
          this.state.cargoLoaded !== "" ? this.state.cargoLoaded : "",
        inTransitTwo:
          this.state.inTransitTwo !== "" ? this.state.inTransitTwo : "",
        loadingPortReached:
          this.state.loadingPortReached !== ""
            ? this.state.loadingPortReached
            : "",
        hireCompleted:
          this.state.hireCompleted !== "" ? this.state.hireCompleted : ""
      }
    };
    console.log("Call");
    console.log(this.data.ongoing);
    console.log(this.state.id);
    //console.log("truckDispatched");
    firebase
      .firestore()
      .collection("hires")
      .doc(this.state.id)
      .update(timeline)
      .then(() => {
        alert("Confrim!");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (
                  this.state.atContainerPickupLocation != "" &&
                  this.state.truckDispatched != "" &&
                  this.state.inTransitOne != "" &&
                  this.setState.cargoLoaded != "" &&
                  this.setState.inTransitTwo != "" &&
                  this.setState.loadingPortReached != "" &&
                  this.setState.hireCompleted == ""
                ) {
                  this.setState({ hireCompleted: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else if (
                  this.state.truckDispatched == "" ||
                  this.state.atContainerPickupLocation == "" ||
                  this.state.inTransitOne == "" ||
                  this.setState.cargoLoaded == "" ||
                  this.setState.inTransitTwo == "" ||
                  this.setState.loadingPortReached == ""
                ) {
                  alert("Task Schedule Error!");
                } else {
                  alert("Alraedy Completed!");
                }
              }}
            >
              <Text style={styles.buttonText}>Hire Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (
                  this.state.atContainerPickupLocation != "" &&
                  this.state.truckDispatched != "" &&
                  this.state.inTransitOne != "" &&
                  this.setState.cargoLoaded != "" &&
                  this.setState.inTransitTwo != "" &&
                  this.setState.loadingPortReached == ""
                ) {
                  this.setState({ loadingPortReached: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else if (
                  this.state.truckDispatched == "" ||
                  this.state.atContainerPickupLocation == "" ||
                  this.state.inTransitOne == "" ||
                  this.setState.cargoLoaded == "" ||
                  this.setState.inTransitTwo == ""
                ) {
                  alert("Task Schedule Error!");
                } else {
                  alert("Alraedy Completed!");
                }
              }}
            >
              <Text style={styles.buttonText}>Loading Port Reached</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.inTransitTwo === "" ? styles.button : styles.active
              }
              onPress={() => {
                if (
                  this.state.atContainerPickupLocation != "" &&
                  this.state.truckDispatched != "" &&
                  this.state.inTransitOne != "" &&
                  this.setState.cargoLoaded != "" &&
                  this.setState.inTransitTwo == ""
                ) {
                  this.setState({ inTransitTwo: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else if (
                  this.state.truckDispatched == "" ||
                  this.state.atContainerPickupLocation == "" ||
                  this.state.inTransitOne == "" ||
                  this.setState.cargoLoaded == ""
                ) {
                  alert("Task Schedule Error!");
                } else {
                  alert("Alraedy Completed!");
                }
              }}
            >
              <Text style={styles.buttonText}>In Transit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (
                  this.state.atContainerPickupLocation != "" &&
                  this.state.truckDispatched != "" &&
                  this.state.inTransitOne != "" &&
                  this.setState.cargoLoaded == ""
                ) {
                  this.setState({ cargoLoaded: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else if (
                  this.state.truckDispatched == "" ||
                  this.state.atContainerPickupLocation == "" ||
                  this.state.inTransitOne == ""
                ) {
                  alert("Task Schedule Error!");
                } else {
                  alert("Alraedy Completed!");
                }
              }}
            >
              <Text style={styles.buttonText}>Cargo Loaded</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.inTransitOne === "" ? styles.button : styles.active
              }
              onPress={() => {
                if (
                  this.state.atContainerPickupLocation != "" &&
                  this.state.truckDispatched != "" &&
                  this.state.inTransitOne == ""
                ) {
                  this.setState({ inTransitOne: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else if (
                  this.state.truckDispatched == "" ||
                  this.state.atContainerPickupLocation == ""
                ) {
                  alert("Task Schedule Error!");
                } else {
                  alert("Alraedy Completed!");
                }
              }}
            >
              <Text style={styles.buttonText}>In Transit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.atContainerPickupLocation === ""
                  ? styles.button
                  : styles.active
              }
              onPress={() => {
                if (
                  this.state.truckDispatched != "" &&
                  this.state.atContainerPickupLocation == ""
                ) {
                  this.setState({ atContainerPickupLocation: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else if (this.state.truckDispatched == "") {
                  alert("Task Schedule Error!");
                } else {
                  alert("Already Completed");
                }
              }}
            >
              <Text style={styles.buttonText}>
                At Container Pickup Location
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.truckDispatched === ""
                  ? styles.button
                  : styles.active
              }
              onPress={() => {
                if (this.state.truckDispatched == "") {
                  this.setState({ truckDispatched: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else {
                  alert("Already Completed!");
                }
              }}
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
  },
  active: {
    marginTop: 7,
    marginBottom: 7,
    paddingVertical: 3,
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    width: "100%",
    height: 50,
    borderColor: "#f00"
  }
});
