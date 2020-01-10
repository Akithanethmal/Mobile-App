import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView,Modal,TouchableHighlight} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AssignedHires extends Component {
    static navigationOptions = {
        title: 'Hire Assignments',
        headerTitleStyle: {
            fontSize:25,
            flex:1 
        },  
    };
  data = this.props.navigation.state.params
  constructor(props) {
    super(props);  
  }
  state = {
    data:this.data.assignedhires,
    modalVisible:false,
    doc:''
  };
  componentDidMount(){
    
  }
  render() {
    return (
      <ScrollView>
        {
        this.state.data.map((u,i)=>{
          const dateTime = moment(u.pickupDatetime).format('MMM Do YYYY, h:mm:ss a')
          return(
          <Card
            key = {i}
            containerStyle={styles.cardContainer}
            wrapperStyle={styles.wrapContainer}
          >
            <TouchableOpacity style={styles.listItem} onPress={()=>this.setState({modalVisible:true, doc:u})}>
            <Icon
              name='directions-car'
              type='material'
              color='#666666'
              size = {30}
            />
            <Text style={styles.itemcomponent}>{dateTime}</Text>
            <Text style={styles.itemcomponent}>{u.hireType}</Text>
            <Text allowFontScaling={true} style={styles.itemcomponent}>{u.pickupLocation}</Text>
            </TouchableOpacity>
          </Card>)
        })
        }
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({modalVisible:false})
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Text>{this.state.doc.pickupLocation}</Text>

            <TouchableHighlight
              onPress={() => {
                this.setState({modalVisible:false})
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer:{
    borderRadius:10,
    padding:0,
  },
  wrapContainer:{
    flex:1,
    padding:10,
  },
  listItem:{
    flexGrow:1,
    flexDirection:'row',
    alignItems:'center',
    margin:0,
  },
  itemcomponent:{
    paddingHorizontal: 10,
    fontSize:18,
  },
})