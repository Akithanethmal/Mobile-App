import React, { Component } from "react";
import { Card, Button } from "react-native-elements";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  AsyncStorage
} from "react-native";
import firebase from "../../config/Firebase";
import moment from "moment";

export default class Dashboard extends Component {
  static navigationOptions = {
    title: "Dashboard",
    headerTitleStyle: {
      fontSize: 25,
      textAlign: "center",
      flex: 1
    }
  };
  constructor(props) {
    super(props);
  }
  state = {
    token: "",
    assignedhires: [],
    upcominghires: [],
    pasthires: [],
    ongoing: []
  };
  async componentDidMount() {
    this.willFocus = this.props.navigation.addListener(
      "willFocus",
      async () => {
        id = await AsyncStorage.getItem("id");
        this.setState({ token: id });
        this.refreshState();
        this.getHireData();
      }
    );
  }
  refreshState() {
    this.setState({
      assignedhires: [],
      upcominghires: [],
      pasthires: [],
      ongoing: []
    });
  }
  getHireData() {
    const db = firebase.firestore();
    db.collection("hires")
      .where("driverId", "==", this.state.token)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          pickupdate = moment(doc.data().pickupDatetime).format("MMM Do YYYY");
          today = moment().format("MMM Do YYYY");
          var id = { id: doc.id };
          var data = doc.data();
          var merged = { ...data, ...id };
          //console.log(pickupdate + today);
          if (doc.data().hireStatus === "driverPending") {
            var joined = this.state.assignedhires.concat(merged);
            this.setState({ assignedhires: joined });
          } else if (
            doc.data().hireStatus === "ongoing" &&
            today < pickupdate
          ) {
            var joined = this.state.upcominghires.concat(merged);
            this.setState({ upcominghires: joined });
          } else if (
            doc.data().hireStatus === "ongoing" &&
            today === pickupdate
          ) {
            var joined = this.state.ongoing.concat(merged);
            this.setState({ ongoing: joined });
          } else if (doc.data().hireStatus === "completed") {
            var joined = this.state.pasthires.concat(merged);
            this.setState({ pasthires: joined });
          }
        });
        console.log(this.state.assignedhires);
        // console.log(this.state.upcominghires);
        // console.log(this.state.ongoing);
        console.log(this.state.pasthires);
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }
  logout() {
    firebase.auth().signOut();
    this.props.navigation.goBack();
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card containerStyle={styles.upcardContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("HireAssignment", {
                  assignedhires: this.state.assignedhires
                });
              }}
            >
              <Text style={styles.buttonText}>ASSIGNED HIRES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("UpcomingHires", {
                  upcominghires: this.state.upcominghires
                });
              }}
            >
              <Text style={styles.buttonText}>UPCOMING HIRES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("PastHires", {
                  pasthires: this.state.pasthires
                });
              }}
            >
              <Text style={styles.buttonText}>PAST HIRES</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <Card containerStyle={styles.downcardContainer}>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("OngoinHires", {
                  ongoing: this.state.ongoing
                });
              }}
            >
              <Text style={styles.buttonText}>ONGOING HIRES</Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Party Hard"
            type="solid"
            raised
            buttonStyle={styles.partyhardbutton}
            onPress={() => this.logout()}
          />
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
  DashboardText: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    justifyContent: "center"
  },
  upcardContainer: {
    flexShrink: 1,
    padding: 20,
    margin: 10,
    height: 275,
    width: "95%",
    justifyContent: "center",
    borderRadius: 10
  },
  subContainer: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#CCCCCC"
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
  downcardContainer: {
    flexShrink: 1,
    width: "95%",
    borderRadius: 10
  },
  partyhardbutton: {
    backgroundColor: "#0b7a07"
  }
});
