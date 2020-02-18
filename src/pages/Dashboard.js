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
  AsyncStorage,
  ActivityIndicator
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
    doc: "",
    isLoading: false,
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
        this.setState({ token: id, isLoading: true });
        this.refreshState();
        this.getHireData();
        this.getData();
      }
    );
  }
  getData = async () => {
    this.setState({ doc: doc.ongoing });
  };
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
        this.setState({ isLoading: false });
        //console.log(this.state.assignedhires);
        // console.log(this.state.upcominghires);
        console.log(this.state.ongoing);
        // console.log(this.state.pasthires);
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }
  logout() {
    firebase.auth().signOut();
    AsyncStorage.removeItem("id");
    this.props.navigation.goBack();
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activityContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      const assignedHiresCount = this.state.assignedhires.length;
      const upcomingHiresCount = this.state.upcominghires.length;
      const ongoingHireCount = this.state.ongoing.length;
      const pastHireCount =this.state.pasthires.length;

      return (
        <ScrollView>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              this.props.navigation.navigate("HireAssignment", {
                assignedhires: this.state.assignedhires
              });
            }}
          >
            <Image style={styles.card}></Image>
            <View style={styles.cardContent}>
              <Text style={styles.name}>ASSIGNED HIRES</Text>
              <TouchableOpacity
                style={styles.followButton}
                onPress={() => {
                  this.props.navigation.navigate("HireAssignment", {
                    assignedhires: this.state.assignedhires
                  });
                }}
              >
                <Text style={styles.followButtonText}>
                  {assignedHiresCount}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              this.props.navigation.navigate("UpcomingHires", {
                upcominghires: this.state.upcominghires
              });
            }}
          >
            <Image style={styles.card}></Image>
            <View style={styles.cardContent}>
              <Text style={styles.name}>UPCOMING HIRES</Text>
              <TouchableOpacity
                style={styles.followButton}
                onPress={() => {
                  this.props.navigation.navigate("UpcomingHires", {
                    upcominghires: this.state.upcominghires
                  });
                }}
              >
                <Text style={styles.followButtonText}>
                  {upcomingHiresCount}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              this.props.navigation.navigate("PastHires", {
                pasthires: this.state.pasthires
              });
            }}
          >
            <Image style={styles.image}></Image>
            <View style={styles.cardContent}>
              <Text style={styles.name}>PAST HIRES</Text>
            </View>
          <Text>{pastHireCount}</Text>
          </TouchableOpacity>
          {!ongoingHireCount ? (
            <Card style={styles.cardContainer}>
              <View style={styles.subContainer}>
                <View>
                  <Text h3>
                    Ongoing Hire for {moment().format("MMM Do YYYY")}
                  </Text>
                </View>
                <View>
                  <Text h5>There is no hire assigned for today!</Text>
                </View>
              </View>
            </Card>
          ) : (
            <Card style={styles.cardContainer}>
              <View style={styles.subContainer}>
                <View>
                  <Text h2>Ongoing Hire</Text>
                </View>
                <View>
                  <Text h5>{this.state.ongoing.hireType}</Text>
                </View>
                <View>
                  <Text h5>Customer:{this.state.ongoing.customerName}</Text>
                </View>
                <View>
                  <Text h5>
                    Pickup Location:{this.state.ongoing.pickupLocation}
                  </Text>
                </View>
                <View>
                  <Text h5>
                    Date and Time:{this.state.ongoing.pickupDatetime}
                  </Text>
                </View>
              </View>
              <View style={styles.detailButton}>
                <Button
                  large
                  backgroundColor={"#999999"}
                  color={"#FFFFFF"}
                  title="Manage Hire"
                  buttonStyle={{ backgroundColor: "green" }}
                  onPress={() => {
                    this.props.navigation.navigate("OngoinHires", {
                      ongoing: this.state.ongoing
                    });
                  }}
                />
              </View>
            </Card>
          )}
          <View style={{ paddingTop: 15 }}>
            <TouchableOpacity
              style={styles.signoutButtonBottom}
              onPress={() => {
                this.props.navigation.navigate("profile", {
                  driverId: this.state.token
                });
              }}
            >
              <Text style={styles.signoutButtonText}>Profile</Text>
            </TouchableOpacity>
          </View>
          <Button
            title="Logout"
            type="solid"
            raised
            buttonStyle={styles.signoutButtonBottom}
            onPress={() => this.logout()}
          />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#CCCCCC"
  },
 
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
    height: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    paddingVertical: 8
  },
  signoutButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlignVertical: "center"
  },
  signout: {
    marginTop: 10,
    marginRight: 2,
    alignSelf: "flex-end",
    marginBottom: 5,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    borderWidth: 1,
    borderRadius: 5,
    width: 60
  },
  signoutButtonBottom: {
    marginTop: 10,
    margin: 5,
    marginBottom: 5,
    paddingVertical: 12,
    paddingTop: 10,
    alignItems: "center",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    borderWidth: 1,
    borderRadius: 5
  },
  detailButton: {
    marginTop: 10
  },
  // test
  contentList: {
    flex: 1
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    height: 50,
    width: 50,
    alignSelf: "center"
  },

  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    borderRadius: 30
  },

  name: {
    fontSize: 28,
    flex: 1,
    alignSelf: "center",
    color: "#3399ff",
    fontWeight: "bold"
  },
  count: {
    fontSize: 20,
    flex: 1,
    alignSelf: "center",
    color: "#6666ff"
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0ea1c9"
  },
  followButtonText: {
    color: "#0ea1c9",
    fontSize: 20
  },
  activityContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
});
