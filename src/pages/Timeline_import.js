import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  AsyncStorage,
  ActivityIndicator
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
    timeline: {
      hireCompleted: {
        at: "",
        bg: "",
        id: "",
        img: "",
        set: "",
        title: "",
        val: ""
      },
      destinationReached: {
        at: "",
        bg: "",
        id: "",
        img: "",
        set: "",
        title: "",
        val: ""
      },
      inTransit: {
        at: "",
        bg: "",
        id: "",
        img: "",
        set: "",
        title: "",
        val: ""
      },
      cargoLoaded: {
        at: "",
        bg: "",
        id: "",
        img: "",
        set: "",
        title: "",
        val: ""
      },
      atCargoLocation: {
        at: "",
        bg: "",
        id: "",
        img: "",
        set: "",
        title: "",
        val: ""
      },
      truckDispatched: {
        at: "",
        bg: "",
        id: "",
        img: "",
        set: "",
        title: "",
        val: ""
      }
    }
  };
  componentDidMount() {
    this.setState({ id: this.data.ongoing, isLoading: true }, () =>
      this.getCurrentTimeline()
    );
  }
  getCurrentTimeline = () => {
    firebase
      .firestore()
      .collection("hires")
      .doc(this.state.id)
      .get()
      .then(snapshot => {
        //console.log(snapshot.data().timeline);
        timeline = snapshot.data().timeline;
        this.setState({ timeline: timeline, isLoading: false });
        //console.log(this.state);
      });
  };

  timelineUpdate = async () => {
    this.setState({ isLoading: true });
    timeline = {
      timeline: {
        truckDispatched: {
          at: this.state.timeline.truckDispatched.at
            ? this.state.timeline.truckDispatched.at
            : "",
          bg: this.state.timeline.truckDispatched.bg
            ? this.state.timeline.truckDispatched.bg
            : "",
          id: this.state.timeline.truckDispatched.id
            ? this.state.timeline.truckDispatched.id
            : "",
          img: this.state.timeline.truckDispatched.img
            ? this.state.timeline.truckDispatched.img
            : "",
          set: this.state.timeline.truckDispatched.set
            ? this.state.timeline.truckDispatched.set
            : "",
          title: this.state.timeline.truckDispatched.title
            ? this.state.timeline.truckDispatched.title
            : "",
          val: this.state.timeline.truckDispatched.val
            ? this.state.timeline.truckDispatched.val
            : ""
        },
        atCargoLocation: {
          at: this.state.timeline.atCargoLocation.at
            ? this.state.timeline.atCargoLocation.at
            : "",
          bg: this.state.timeline.atCargoLocation.bg
            ? this.state.timeline.atCargoLocation.bg
            : "",
          id: this.state.timeline.atCargoLocation.id
            ? this.state.timeline.atCargoLocation.id
            : "",
          img: this.state.timeline.atCargoLocation.img
            ? this.state.timeline.atCargoLocation.img
            : "",
          set: this.state.timeline.atCargoLocation.set
            ? this.state.timeline.atCargoLocation.set
            : "",
          title: this.state.timeline.atCargoLocation.title
            ? this.state.timeline.atCargoLocation.title
            : "",
          val: this.state.timeline.atCargoLocation.val
            ? this.state.timeline.atCargoLocation.val
            : ""
        },
        cargoLoaded: {
          at: this.state.timeline.cargoLoaded.at
            ? this.state.timeline.cargoLoaded.at
            : "",
          bg: this.state.timeline.cargoLoaded.bg
            ? this.state.timeline.cargoLoaded.bg
            : "",
          id: this.state.timeline.cargoLoaded.id
            ? this.state.timeline.cargoLoaded.id
            : "",
          img: this.state.timeline.cargoLoaded.img
            ? this.state.timeline.cargoLoaded.img
            : "",
          set: this.state.timeline.cargoLoaded.set
            ? this.state.timeline.cargoLoaded.set
            : "",
          title: this.state.timeline.cargoLoaded.title
            ? this.state.timeline.cargoLoaded.title
            : "",
          val: this.state.timeline.cargoLoaded.val
            ? this.state.timeline.cargoLoaded.val
            : ""
        },
        inTransit: {
          at: this.state.timeline.inTransit.at
            ? this.state.timeline.inTransit.at
            : "",
          bg: this.state.timeline.inTransit.bg
            ? this.state.timeline.inTransit.bg
            : "",
          id: this.state.timeline.inTransit.id
            ? this.state.timeline.inTransit.id
            : "",
          img: this.state.timeline.inTransit.img
            ? this.state.timeline.inTransit.img
            : "",
          set: this.state.timeline.inTransit.set
            ? this.state.timeline.inTransit.set
            : "",
          title: this.state.timeline.inTransit.title
            ? this.state.timeline.inTransit.title
            : "",
          val: this.state.timeline.inTransit.val
            ? this.state.timeline.inTransit.val
            : ""
        },
        destinationReached: {
          at: this.state.timeline.destinationReached.at
            ? this.state.timeline.destinationReached.at
            : "",
          bg: this.state.timeline.destinationReached.bg
            ? this.state.timeline.destinationReached.bg
            : "",
          id: this.state.timeline.destinationReached.id
            ? this.state.timeline.destinationReached.id
            : "",
          img: this.state.timeline.destinationReached.img
            ? this.state.timeline.destinationReached.img
            : "",
          set: this.state.timeline.destinationReached.set
            ? this.state.timeline.destinationReached.set
            : "",
          title: this.state.timeline.destinationReached.title
            ? this.state.timeline.destinationReached.title
            : "",
          val: this.state.timeline.destinationReached.val
            ? this.state.timeline.destinationReached.val
            : ""
        },
        hireCompleted: {
          at: this.state.timeline.hireCompleted.at
            ? this.state.timeline.hireCompleted.at
            : "",
          bg: this.state.timeline.hireCompleted.bg
            ? this.state.timeline.hireCompleted.bg
            : "",
          id: this.state.timeline.hireCompleted.id
            ? this.state.timeline.hireCompleted.id
            : "",
          img: this.state.timeline.hireCompleted.img
            ? this.state.timeline.hireCompleted.img
            : "",
          set: this.state.timeline.hireCompleted.set
            ? this.state.timeline.hireCompleted.set
            : "",
          title: this.state.timeline.hireCompleted.title
            ? this.state.timeline.hireCompleted.title
            : "",
          val: this.state.timeline.hireCompleted.val
            ? this.state.timeline.hireCompleted.val
            : ""
        }
      }
    };
    // console.log("Call");
    // console.log(this.data.ongoing);
    // console.log(this.state.id);
    // console.log("truckDispatched");
    firebase
      .firestore()
      .collection("hires")
      .doc(this.state.id)
      .update(timeline)
      .then(() => {
        this.setState({ isLoading: false });
        alert("Confirm!");
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.subContainer}>
              <TouchableOpacity
                style={
                  this.state.timeline.hireCompleted.set == 0
                    ? styles.button
                    : styles.active
                }
                onPress={() => {
                  if (
                    this.state.timeline.destinationReached.set == 1 &&
                    this.state.timeline.hireCompleted.set == 0
                  ) {
                    this.setState(
                      prevState => {
                        let timeline = Object.assign({}, prevState.timeline);
                        timeline.hireCompleted.at = new Date();
                        timeline.hireCompleted.set = 1;
                        return { timeline };
                      },
                      () => this.timelineUpdate()
                    ),
                      firebase
                        .firestore()
                        .collection("hires")
                        .doc(this.state.id)
                        .update({
                          hireStatus: "completed"
                        });
                    // this.props.navigation.goBack();
                  } else {
                    alert("Incorrect Order!");
                  }
                }}
              >
                <Text style={styles.buttonText}>Hire Completed</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.timeline.destinationReached.set == 0
                    ? styles.button
                    : styles.active
                }
                onPress={() => {
                  if (
                    this.state.timeline.inTransit.set == 1 &&
                    this.state.timeline.destinationReached.set == 0
                  ) {
                    this.setState(
                      prevState => {
                        let timeline = Object.assign({}, prevState.timeline);
                        timeline.destinationReached.at = new Date();
                        timeline.destinationReached.set = 1;
                        return { timeline };
                      },
                      () => this.timelineUpdate()
                    );
                  } else {
                    alert("Incorrect Order!");
                  }
                }}
              >
                <Text style={styles.buttonText}>Destination reached</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.timeline.inTransit.set == 0
                    ? styles.button
                    : styles.active
                }
                onPress={() => {
                  if (
                    this.state.timeline.cargoLoaded.set == 1 &&
                    this.state.timeline.inTransit.set == 0
                  ) {
                    this.setState(
                      prevState => {
                        let timeline = Object.assign({}, prevState.timeline);
                        timeline.inTransit.at = new Date();
                        timeline.inTransit.set = 1;
                        return { timeline };
                      },
                      () => this.timelineUpdate()
                    );
                  } else {
                    alert("Incorrect Order!");
                  }
                }}
              >
                <Text style={styles.buttonText}>In Transit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.timeline.cargoLoaded.set == 0
                    ? styles.button
                    : styles.active
                }
                onPress={() => {
                  if (
                    this.state.timeline.atCargoLocation.set == 1 &&
                    this.state.timeline.cargoLoaded.set == 0
                  ) {
                    this.setState(
                      prevState => {
                        let timeline = Object.assign({}, prevState.timeline);
                        timeline.cargoLoaded.at = new Date();
                        timeline.cargoLoaded.set = 1;
                        return { timeline };
                      },
                      () => this.timelineUpdate()
                    );
                  } else {
                    alert("Incorrect Order!");
                  }
                }}
              >
                <Text style={styles.buttonText}>Cargo Loaded</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.timeline.atCargoLocation.set == 0
                    ? styles.button
                    : styles.active
                }
                onPress={() => {
                  if (
                    this.state.timeline.truckDispatched.set == 1 &&
                    this.state.timeline.atCargoLocation.set == 0
                  ) {
                    this.setState(
                      prevState => {
                        let timeline = Object.assign({}, prevState.timeline);
                        timeline.atCargoLocation.at = new Date();
                        timeline.atCargoLocation.set = 1;
                        return { timeline };
                      },
                      () => this.timelineUpdate()
                    );
                  } else {
                    alert("Incorrect Order!");
                  }
                }}
              >
                <Text style={styles.buttonText}>At Pickup Location</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.timeline.truckDispatched.set == 0
                    ? styles.button
                    : styles.active
                }
                onPress={() => {
                  if (this.state.timeline.truckDispatched.set == 0) {
                    this.setState(
                      prevState => {
                        let timeline = Object.assign({}, prevState.timeline);
                        timeline.truckDispatched.at = new Date();
                        timeline.truckDispatched.set = 1;
                        return { timeline };
                      },
                      () => this.timelineUpdate()
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
}

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
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
