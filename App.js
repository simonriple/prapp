
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,FlatList} from 'react-native';
import {StackNavigator, createBottomTabNavigator} from 'react-navigation'
import feedScreen from './screen/feedScreen.js';
import recordScreen from './screen/recordScreen.js';
import statisticsScreen from './screen/statisticsScreen.js';
import Icon from 'react-native-ionicons';


console.disableYellowBox = true;

export default createBottomTabNavigator({
  Feed: {
    screen: feedScreen,
  },
  Statistics: {
    screen: statisticsScreen
  },
  Record: {
    screen: recordScreen
  },
},
  {
  tabBarOptions: {
    activeTintColor: '#56607D',
    activeBackgroundColor: '#F7EAB7',
    inactiveTintColor: '#F7EAB7',
    inactiveBackgroundColor: '#56607D',
    labelStyle: {
      fontSize: 15,
    },
    style: {
      justifyContent: 'center'
    }
  }
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
