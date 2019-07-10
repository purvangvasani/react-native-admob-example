/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from 'react-native';

import RewardedAd from './src/RewardedAd';
import VideoAd from './src/VideoAd';
import FullAd from './src/FullAd';
import BannerAd from './src/Banner';

class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Banner')}>
          <Text style={styles.welcome}>Banner Ads!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Full')}>
          <Text style={styles.welcome}>Interstitial Ads!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Video')}>
          <Text style={styles.welcome}>Interstitial Video Ads!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Rewarded')}>
          <Text style={styles.welcome}>Rewarded Video Ads!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  App: {
    screen: App
  },
  Banner: {
    screen: BannerAd
  },
  Full: {
    screen: FullAd
  },
  Video: {
    screen: VideoAd
  },
  Rewarded: {
    screen: RewardedAd
  },
});

export default createAppContainer(AppNavigator);

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
