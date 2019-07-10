import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import firebase from 'react-native-firebase'

class BannerAd extends Component {
  
  render() {
    const Banner = firebase.admob.Banner;
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();

    const unitId =
      Platform.OS === 'ios'
        ? 'ca-app-pub-3940256099942544/6300978111'
        : 'ca-app-pub-3940256099942544/6300978111';
        
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Banner Ads!</Text>

        <Banner
          unitId={unitId}
          size={'SMART_BANNER'}
          request={request.build()}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
        />
      </View>
    );
  }
}
export default BannerAd

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