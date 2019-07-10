import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import firebase from 'react-native-firebase'

export class RewardedAd extends Component {
    
    componentDidMount() {
        const unitId =
        // Rewarded Video
        Platform.OS === 'ios'
            ? 'ca-app-pub-3940256099942544/5224354917'
            : 'ca-app-pub-3940256099942544/5224354917';

    
        const advert = firebase.admob().interstitial(unitId);
        const AdRequest = firebase.admob.AdRequest;
        const request = new AdRequest();
        advert.loadAd(request.build());
      
        advert.on('onAdLoaded', () => {
          console.log('Advert ready to show.');
          advert.show();
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Rewarded Video Ads!</Text>
            </View>
        )
    }
}

export default RewardedAd

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