import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from '../../config/Firebase'

export default class AuthLoading extends Component {
  
    componentDidMount=()=>{
        firebase.auth().onAuthStateChanged(user=>{
            this.props.navigation.navigate(user?'DashboardRouts':'Login');
            
        })
    }
    render() {
        return (
            <View>
                <ActivityIndicator
                    size="large"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})