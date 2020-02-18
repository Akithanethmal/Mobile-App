import React, { Component } from "react";
import { Card, Button } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  Image
} from "react-native";
import firebase from "../../config/Firebase";
import moment from "moment";
import { createIconSetFromFontello } from "react-native-vector-icons";

export default class profile extends Component {
  constructor(props) {
    super(props);
  }
  data = this.props.navigation.state.params;
  state = {
    data: this.data,
    modalVisible: false,
    doc: "",
    email: "",
    isLoading:false
  };
  async componentDidMount() {
    this.getData();
    this.setState({isLoading:true});
  }
  getData = async () => {
    firebase
      .firestore()
      .collection("drivers")
      .doc(this.state.data.driverId)
      .get()
      .then(doc => {
        this.setState({ doc: doc.data() });
        console.log(doc.data());
        this.setState({isLoading:false});
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
    }else{
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar1.png"
              }}
            />

            <Text style={styles.name}>
              {this.state.doc.firstName + " " + this.state.doc.lastName}
            </Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.textInfo}> {this.state.doc.email} </Text>
            <Text style={styles.textInfo}> {this.state.doc.nic} </Text>
            <Text style={styles.textInfo}> {this.state.doc.licenseNo} </Text>
          </View>
        </View>
      </View>
    );
  }
}
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1E90FF"
  },
  headerContent: {
    padding: 30,
    alignItems: "center"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969"
  }
});
