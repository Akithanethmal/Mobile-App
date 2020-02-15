import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  AsyncStorage
} from "react-native";
import { Icon, Card, Button } from "react-native-elements";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../../config/Firebase";

export default class Timeline_import extends Component {
  static navigationOptions = {
    title: "IMPORT",
    headerTitleStyle: {
      fontSize: 25,
      flex: 1
    }
  };
  data = this.props.navigation.state.params;
  constructor(props) {
    super(props);
  }
  state = {
    id: "",
    modalVisible: false,
    doc: "",
    truckDispatched: "",
    atPickupLocation: "",
    cargoLocation: "",
    inTransit: "",
    destinationReached: "",
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
        atPickupLocation:
          this.state.atPickupLocation !== "" ? this.state.atPickupLocation : "",
        cargoLocation:
          this.state.cargoLocation !== "" ? this.state.cargoLocation : "",
        inTransit: this.state.inTransit !== "" ? this.state.inTransit : "",
        destinationReached:
          this.state.destinationReached !== ""
            ? this.state.destinationReached
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
        alert("Comfrim!");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity
              style={
                this.state.hireCompleted === "" ? styles.button : styles.active
              }
              onPress={() => {
                if (
                  this.state.hireCompleted == "" &&
                  this.state.destinationReached != "" &&
                  this.state.inTransit != "" &&
                  this.state.truckDispatched != "" &&
                  this.state.atPickupLocation != "" &&
                  this.state.cargoLocation != ""
                ) {
                  this.setState(
                    { hireCompleted: Date.now() },
                    () => this.timelineUpdate(),
                    firebase
                      .firestore()
                      .collection("hires")
                      .doc(this.state.id)
                      .update({
                        hireStatus: "completed"
                      })
                  );
                  this.props.navigation.goBack();
                } else if (
                  this.state.destinationReached == "" ||
                  this.state.inTransit == "" ||
                  this.state.truckDispatched == "" ||
                  this.state.atPickupLocation == "" ||
                  this.state.cargoLocation == ""
                ) {
                  alert("Task Schedule Error");
                } else {
                  alert("Completed!");
                }
              }}
            >
              <Text style={styles.buttonText}>Hire Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.destinationReached === ""
                  ? styles.button
                  : styles.active
              }
              onPress={() => {
                if (
                  this.state.destinationReached == "" &&
                  this.state.inTransit != "" &&
                  this.state.truckDispatched != "" &&
                  this.state.atPickupLocation != "" &&
                  this.state.cargoLocation != ""
                ) {
                  this.setState({ destinationReached: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else if (
                  this.state.inTransit == "" ||
                  this.state.truckDispatched == "" ||
                  this.state.atPickupLocation == "" ||
                  this.state.cargoLocation != ""
                ) {
                  alert("Task Schedule Error");
                } else {
                  alert("Alraedy Completed!");
                }
              }}
            >
              <Text style={styles.buttonText}>Destination reached</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.inTransit === "" ? styles.button : styles.active
              }
              onPress={() => {
                if (
                  this.state.inTransit == "" &&
                  this.state.truckDispatched != "" &&
                  this.state.atPickupLocation != "" &&
                  this.state.cargoLocation != ""
                ) {
                  this.setState({ inTransit: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else if (
                  this.state.truckDispatched == "" ||
                  this.state.atPickupLocation == "" ||
                  this.state.cargoLocation == ""
                ) {
                  alert("Task Schedule Error");
                } else {
                  alert("Alraedy Completed!");
                }
              }}
            >
              <Text style={styles.buttonText}>In Transit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cargoLocation === "" ? styles.button : styles.active
              }
              onPress={() => {
                if (
                  this.state.cargoLocation == "" &&
                  this.state.truckDispatched != "" &&
                  this.state.atPickupLocation != ""
                ) {
                  this.setState({ cargoLocation: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else if (
                  this.state.truckDispatched == "" ||
                  this.state.atPickupLocation == ""
                ) {
                  alert("Task Schedule Error!");
                } else {
                  alert("Alraedy Completed!");
                }
              }}
            >
              <Text style={styles.buttonText}>Cargo Location</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.atPickupLocation === ""
                  ? styles.button
                  : styles.active
              }
              onPress={() => {
                if (
                  this.state.atPickupLocation == "" &&
                  this.state.truckDispatched != ""
                ) {
                  this.setState({ atPickupLocation: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else if (this.state.truckDispatched == "") {
                  alert("Task Schedule Error!");
                } else {
                  alert("Alraedy Completed!");
                }
              }}
            >
              <Text style={styles.buttonText}>At Pickup Location</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.truckDispatched === ""
                  ? styles.button
                  : styles.active
              }
              onPress={() => {
                if (this.state.truckDispatched === "") {
                  this.setState({ truckDispatched: Date.now() }, () =>
                    this.timelineUpdate()
                  );
                } else {
                  alert("Alraedy Completed!");
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
