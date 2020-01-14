import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableHighlight,
  Button,
  AsyncStorage
} from "react-native";
import firebase from "../../config/Firebase";
import { Icon, Card } from "react-native-elements";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Upcominghires extends Component {
  static navigationOptions = {
    title: "Upcoming Hires",
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
    data: this.data.upcominghires,
    modalVisible: false,
    doc: ""
  };
  async updateData(){
    console.log("call");
    const id = await AsyncStorage.getItem("id");
    const db = firebase.firestore();
    db.collection("hires").doc("kw2wHKFX91oRODunK0tG").update({
      hireStatus:"request"
    }).then(()=>  alert("Don't press bitch") ) 
      .catch(() => console.log("error"))
  };
  componentDidMount() {}
  render() {
    return (
      <ScrollView>
        {this.state.data.map((u, i) => {
          const dateTime = moment(u.pickupDatetime).format(
            "MMM Do YYYY, h:mm:ss a"
          );
          return (
            <Card
              key={i}
              containerStyle={styles.cardContainer}
              wrapperStyle={styles.wrapContainer}
            >
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => this.setState({ modalVisible: true, doc: u })}
              >
                <Icon
                  name="directions-car"
                  type="material"
                  color="#666666"
                  size={30}
                />
                <Text style={styles.itemcomponent}>{dateTime}</Text>
                <Text style={styles.itemcomponent}>{u.hireType}</Text>
                <Text allowFontScaling={true} style={styles.itemcomponent}>
                  {u.pickupLocation}
                </Text>
              </TouchableOpacity>
            </Card>
          );
        })}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style={{ marginTop: 22 }}>
            <Card containerStyle={styles.subcardContainer}>
              <View>
                <View>
                  <Text style={styles.mainText}>{this.state.doc.hireType}</Text>
                </View>
                <View>
                  <Text style={styles.subText}>
                    Date:{" "}
                    {moment(this.state.doc.pickupDatetime).format(
                      "MMM Do YYYY, h:mm:ss a"
                    )}
                  </Text>
                </View>
                <View>
                  <Text style={styles.subText}>
                    Customer: {this.state.doc.customerName}
                  </Text>
                </View>
                <View>
                  <Text style={styles.subText}>
                    Vehicle: {this.state.doc.vehicleNo}
                  </Text>
                </View>
              </View>
            </Card>
            <Card containerStyle={styles.subcardContainer}>
              <View>
                <Text style={styles.mainText}>Container Details</Text>
              </View>
              <View>
                <Text style={styles.subText}>
                  Container Type: {this.state.doc.containerType}
                </Text>
              </View>
              <View>
                <Text style={styles.subText}>
                  Pickup Date:{" "}
                  {moment(this.state.doc.pickupDatetime).format(
                    "MMM Do YYYY, h:mm:ss a"
                  )}
                </Text>
              </View>
              <View>
                <Text style={styles.subText}>
                  Container Location: {this.state.doc.pickupLocation}
                </Text>
              </View>
            </Card>
            <Card containerStyle={styles.subcardContainer}>
              <View>
                <Text style={styles.mainText}>Cargo Details</Text>
              </View>
              <View>
                <Text style={styles.subText}>
                  Cargo Type: {this.state.doc.cargoType}
                </Text>
              </View>
              <View>
                <Text style={styles.subText}>
                  Cargo Weight: {this.state.doc.weight}
                </Text>
              </View>
              <View>
                <Text style={styles.subText}>
                  Vessel Arrival Date:{" "}
                  {moment(this.state.doc.vesselArrivalDatetime).format(
                    "MMM Do YYYY, h:mm:ss a"
                  )}
                </Text>
              </View>
              <View>
                <Text style={styles.subText}>
                  Unloading Port: {this.state.doc.unloadingPort}
                </Text>
              </View>
              <View>
                <Text style={styles.subText}>
                  Destination: {this.state.doc.destination}
                </Text>
              </View>
            </Card>

            <TouchableHighlight
              onPress={() => {
                this.setState({ modalVisible: false });
              }}
            >
              <Text></Text>
            </TouchableHighlight>
            <View style={styles.detailButton}>
              <Button
                large
                backgroundColor={"#f43208"}
                leftIcon={{ name: "edit" }}
                title="Reject Hire"
                buttonStyle={{ color: "f43208" }}
                containerStyle={{ backgroundColor: "#f00" }}
                onPress={() => this.updateData()}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    padding: 0
  },
  wrapContainer: {
    flex: 1,
    padding: 10
  },
  listItem: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 0
  },
  itemcomponent: {
    paddingHorizontal: 10,
    fontSize: 18
  },
  subcardContainer: {
    flexShrink: 1,
    padding: 20,
    margin: 10,
    height: 200,
    width: "95%",
    justifyContent: "center",
    borderRadius: 10
    // backgroundColor:'#ffffff',
    // elevation:3,
    // cornerRadius:5,
    // opacity:0.5,
  },
  mainText: {
    textTransform: "uppercase",
    fontSize: 35,
    fontWeight: "bold",
    padding: 4
  },
  subText: {
    fontSize: 15,
    padding: 4
  },
  detailButton: {
    marginTop: 0
  }
});
