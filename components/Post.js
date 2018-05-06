/**
 * Simple post component
 *
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';


export default class Post extends Component {
 getInstrumentIcon = (instrument) => {
   switch (instrument) {
    case "clarinet":
      return require('../images/instruments/clarinet.png');
    case "drum":
      return require('../images/instruments/drum.png');
    case "flute":
      return require('../images/instruments/flute.png');
    case "guitar":
      return require('../images/instruments/guitar.png');
    case "horn":
      return require('../images/instruments/horn.png');
    case "piano":
      return require('../images/instruments/piano.png');
    case "saxophone":
      return require('../images/instruments/saxophone.png');
    case "sing":
      return require('../images/instruments/sing.png');
    case "trombone":
      return require('../images/instruments/trombone.png');
    case "trumpet":
      return require('../images/instruments/trumpet.png');
    case "tuba":
      return require('../images/instruments/tuba.png');
    case "violin":
      return require('../images/instruments/violin.png');
    case "other":
      return require('../images/instruments/other.png');
    default:
      return null;

   }
 }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <Image source={this.getInstrumentIcon(this.props.instrument)} style={styles.instrument}/>
            <View style={styles.right}>
              <Text style={styles.name}>
                {this.props.profile}
              </Text>
              <Text>
                {this.props.band}
              </Text>
              <View style={styles.row}>
                <Image source={require('../images/clock.png')} style={styles.clock}/>
                <Text>
                  {this.props.practiceStart} - {this.props.practiceEnd}
                </Text>
              </View>
              <View style={styles.description}>
                <Text>
                  {this.props.description}
                </Text>
              </View>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    padding: 5
  },
  name: {
    fontSize: 30,
  },
  clock: {
    width: 13,
    height: 13,
    marginRight: 8
  },
  instrument: {
    width: Dimensions.get('screen').width/3*0.8,
    height: Dimensions.get('screen').width/3*0.8,
    padding: 20,
    marginRight: 20,
    marginLeft:20
  },
  description: {
    padding: 5
  },
  right: {
    width: Dimensions.get('screen').width*2/3,
    flexDirection: 'column'
  }
});
