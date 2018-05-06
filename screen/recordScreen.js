/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,FlatList,TextInput, TouchableOpacity, Image, Picker} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Post from '../components/Post.js';
import { db } from '../firebase';


export default class recordScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      name:'',
      band:'',
      startTime:'',
      endTime:'',
      description:'',
      recording: 'Record',
    };
  };

  startTime = () => {
    var date,time,record

    record = this.state.recording;
    date = new Date();
    time = date.getHours().toString()+':'+date.getMinutes().toString();
    record=='Record' ? this.setState({startTime: time, recording: "Recording"}) : this.stopTime(time);
  }

  stopTime = (time) => {
    this.setState({endTime: time, recording: "Stopped recording"}, this.uploadState);

  }

  uploadState = () => {
    var data = {
      name: this.state.name,
      band: this.state.band,
      instrument: this.state.instrument,
      practiceStart: this.state.startTime,
      practiceEnd: this.state.endTime,
      description: this.state.description
    };
  var setDoc = db.collection('users').doc().set(data);
  }



  render() {
    let data = [{
      value: 'clarinet', label: 'Clarinet'
    }, {
      value: 'drum', label: 'Drums'
    }, {
      value: 'flute', label: 'Flute'
    }, {
      value: 'guitar', label: 'Guitar'
    }, {
      value: 'horn', label: 'Horn'
    }, {
      value: 'piano', label: 'Piano'
    }, {
      value: 'saxophone', label: 'Saxophone'
    }, {
      value: 'sing', label: 'Vocal'
    }, {
      value: 'trombone', label: 'Trombone'
    }, {
      value: 'trumpet', label: 'Trumpet'
    }, {
      value: 'tuba', label: 'Tuba'
    }, {
      value: 'violin', label: 'Violin'
    }, {
      value: 'other', label: 'Other'
    }];
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hi! Just fill in your information and hit that record-button once you are ready to practice. When you are finished with practice, press the button again</Text>
        <View style={styles.inputFields}>
          <TextInput
            style = {styles.input}
            placeholder = "Whats your name?"
            placeholderTextColor = '#F7EAB7'
            returnKeyType="next"
            keyboardType = "email-address"
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
          <View style = {styles.dropContainer}>
            <Dropdown
              style = {styles.dropdown}
              placeholder = "What instrument do you play?"
              placeholderTextColor = '#F7EAB7'
              label="Instrument"
              data = {data}
              baseColor = '#F7EAB7'
              itemColor = '#F7EAB7'
              value={this.state.instrument}
              onChangeText={(instrument) => this.setState({instrument})}
            />
          </View>
          <TextInput
            style = {styles.input}
            placeholder = "What band do you play in?"
            placeholderTextColor = '#F7EAB7'
            returnKeyType="next"
            keyboardType = "email-address"
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(band) => this.setState({band})}
            value={this.state.band}
          />
          <TextInput
            style = {styles.input}
            placeholder = "Short description of your practice"
            placeholderTextColor = '#F7EAB7'
            returnKeyType="next"
            keyboardType = "email-address"
            autoCorrect = {false}
            autoCapitalize = "none"
            onChangeText={(description) => this.setState({description})}
            value={this.state.description}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={this.startTime}>
            <Image source={require('../images/record.png')} style={styles.image}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.record}>{this.state.recording}</Text>

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
    paddingRight:10,
    paddingLeft:10
  },
  input:{
    minWidth:300,
    flexWrap:'wrap',
    height : 40,
    backgroundColor: 'rgb(86, 96, 125)',
    paddingHorizontal : 10,
    color:'#F7EAB7',
    marginBottom : 10,
  },
  inputFields:{
    width: '100%'
  },
  button:{
    paddingTop: 20,
    paddingBottom:2
  },
  image:{
    height:80,
    width:80
  },
  header:{
    paddingVertical: 30,
    fontSize: 20,
    textAlign:'center'
  },
  record:{
    fontSize: 25
  },
  dropContainer:{
    marginBottom: 10,
    height: 70,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(86, 96, 125)',

  },
  dropdown: {
    backgroundColor: 'rgb(86, 96, 125)',
    paddingHorizontal : 10,
    color:'#F7EAB7',
  }
});
