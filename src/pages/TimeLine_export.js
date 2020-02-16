import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator
} from "react-native";
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
  }
  state = {
    id: "",
    modalVisible: false,
    isLoading: false,
    doc: "",
    timeline: {
      atContainerLocation: {
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
      hireCompleted: {
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
      inTransit2: {
        at: "",
        bg: "",
        id: "",
        img: "",
        set: "",
        title: "",
        val: ""
      },
      portReached: {
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
        console.log(snapshot.data().timeline);
        timeline = snapshot.data().timeline;
        this.setState({ timeline: timeline, isLoading: false });
        console.log(this.state);
      });
  };
  timelineUpdate = async () => {
    console.log(this.state.timeline);
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
        portReached: {
          at: this.state.timeline.portReached.at
            ? this.state.timeline.portReached.at
            : "",
          bg: this.state.timeline.portReached.bg
            ? this.state.timeline.portReached.bg
            : "",
          id: this.state.timeline.portReached.id
            ? this.state.timeline.portReached.id
            : "",
          img: this.state.timeline.portReached.img
            ? this.state.timeline.portReached.img
            : "",
          set: this.state.timeline.portReached.set
            ? this.state.timeline.portReached.set
            : "",
          title: this.state.timeline.portReached.title
            ? this.state.timeline.portReached.title
            : "",
          val: this.state.timeline.portReached.val
            ? this.state.timeline.portReached.val
            : ""
        },
        inTransit2: {
          at: this.state.timeline.inTransit2.at
            ? this.state.timeline.inTransit2.at
            : "",
          bg: this.state.timeline.inTransit2.bg
            ? this.state.timeline.inTransit2.bg
            : "",
          id: this.state.timeline.inTransit2.id
            ? this.state.timeline.inTransit2.id
            : "",
          img: this.state.timeline.inTransit2.img
            ? this.state.timeline.inTransit2.img
            : "",
          set: this.state.timeline.inTransit2.set
            ? this.state.timeline.inTransit2.set
            : "",
          title: this.state.timeline.inTransit2.title
            ? this.state.timeline.inTransit2.title
            : "",
          val: this.state.timeline.inTransit2.val
            ? this.state.timeline.inTransit2.val
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
        atContainerLocation: {
          at: this.state.timeline.atContainerLocation.at
            ? this.state.timeline.atContainerLocation.at
            : "",
          bg: this.state.timeline.atContainerLocation.bg
            ? this.state.timeline.atContainerLocation.bg
            : "",
          id: this.state.timeline.atContainerLocation.id
            ? this.state.timeline.atContainerLocation.id
            : "",
          img: this.state.timeline.atContainerLocation.img
            ? this.state.timeline.atContainerLocation.img
            : "",
          set: this.state.timeline.atContainerLocation.set
            ? this.state.timeline.atContainerLocation.set
            : "",
          title: this.state.timeline.atContainerLocation.title
            ? this.state.timeline.atContainerLocation.title
            : "",
          val: this.state.timeline.atContainerLocation.val
            ? this.state.timeline.atContainerLocation.val
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
                    this.state.timeline.portReached.set == 1 &&
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
                    this.props.navigation.goBack();
                  } else {
                    alert("Incorrect Order!");
                  }
                }}
              >
                <Text style={styles.buttonText}>Hire Completed</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.timeline.portReached.set == 0
                    ? styles.button
                    : styles.active
                }
                onPress={() => {
                  if (
                    this.state.timeline.inTransit2.set == 1 &&
                    this.state.timeline.portReached.set == 0
                  ) {
                    this.setState(
                      prevState => {
                        let timeline = Object.assign({}, prevState.timeline);
                        timeline.portReached.at = new Date();
                        timeline.portReached.set = 1;
                        return { timeline };
                      },
                      () => this.timelineUpdate()
                    );
                  } else {
                    alert("Incorrect Order!");
                  }
                }}
              >
                <Text style={styles.buttonText}>Loading Port Reached</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.timeline.inTransit2.set == 0
                    ? styles.button
                    : styles.active
                }
                onPress={() => {
                  if (
                    this.state.timeline.cargoLoaded.set == 1 &&
                    this.state.timeline.inTransit2.set == 0
                  ) {
                    this.setState(
                      prevState => {
                        let timeline = Object.assign({}, prevState.timeline);
                        timeline.inTransit2.at = new Date();
                        timeline.inTransit2.set = 1;
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
                    this.state.timeline.inTransit.set == 1 &&
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
                  this.state.timeline.inTransit.set == 0
                    ? styles.button
                    : styles.active
                }
                onPress={() => {
                  if (
                    this.state.timeline.atContainerLocation.set == 1 &&
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
                  this.state.timeline.atContainerLocation.set == 0
                    ? styles.button
                    : styles.active
                }
                onPress={() => {
                  if (
                    this.state.timeline.truckDispatched.set == 1 &&
                    this.state.timeline.atContainerLocation.set == 0
                  ) {
                    this.setState(
                      prevState => {
                        let timeline = Object.assign({}, prevState.timeline);
                        timeline.atContainerLocation.at = new Date();
                        timeline.atContainerLocation.set = 1;
                        return { timeline };
                      },
                      () => this.timelineUpdate()
                    );
                  } else {
                    alert("Incorrect Order!");
                  }
                }}
              >
                <Text style={styles.buttonText}>
                  At Container Pickup Location
                </Text>
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
