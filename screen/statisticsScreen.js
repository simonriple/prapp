
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,FlatList,TextInput, TouchableOpacity, Image} from 'react-native';
import Post from '../components/Post.js';



export default class statisticsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello and welcome to the stastistics screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input:{
    borderColor: '#7a42f4',
    borderWidth: 1
  }
});
