/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,FlatList,Dimensions} from 'react-native';
import Post from '../components/Post.js';
import { db } from '../firebase'


export default class feedScreen extends Component {
  constructor(props){
    super(props)
    this.state ={
      users:[]
    }
  }

  componentDidMount() {
    const data = [];
    db.collection("users").get().then((querySnapshot) => {

    querySnapshot.forEach((doc) => {
      data.push({
        profile: doc.data().name,
        instrument: doc.data().instrument,
        band: doc.data().band,
        practiceStart: doc.data().practiceStart,
        practiceEnd: doc.data().practiceEnd,
        description: doc.data().description
      });
    });
    this.setState({
      users: data
    });

  });
  }


  keyExtractor = (item, index) => index;

  render() {
    console.log(this.state.users)
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatListStyle}
          data={this.state.users}
          keyExtractor={this.keyExtractor}

          renderItem={({item})=>
            <Post
              profile={item.profile}
              instrument={item.instrument}
              band={item.band}
              practiceStart={item.practiceStart}
              practiceEnd={item.practiceEnd}
              description={item.description}
            />
          }
        />
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
    paddingTop: 20
  },
  flatListStyle: {
    width: Dimensions.get('screen').width,
  }
});
