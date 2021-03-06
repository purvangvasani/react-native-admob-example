## Admob Example in React Native

Admob is used to display Ads in your apps. In React-native, the react-native-admob library is available but we are not using it in our project. Instead, we have used the react-native-firebase library to implement the Admob. 

## Dependencies of these project:
```python 
react: 16.8.3 
react-native: 0.59.0 
react-native-firebase: ^5.5.4 
react-native-admob: ^2.0.0-beta.5 
react-native-gesture-handler: ^1.3.0 
react-navigation: ^3.11.0
```

```python
npm install --save react-native-firebase 
react-native link react-native-firebase
```
Next, create a firebase project. Go to the [Google Firebase website](https://firebase.google.com)

After creating the project, configure your app with firebase.

For iOS and Android configuration, you can refer to [this](https://invertase.io/oss/react-native-firebase/quick-start) document.

After successfully configuration of your respective apps, change the MainApplication.java file.
```python
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.admob.RNFirebaseAdMobPackage;
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import com.google.android.gms.ads.MobileAds;

@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
        new RNGestureHandlerPackage(),
        new RNFirebasePackage(), <-- ADD this line
        new RNFirebaseAdMobPackage(), <-- ADD this line
        new RNFirebaseAnalyticsPackage() <-- ADD this line
  );
}
@Override
public void onCreate() {
   super.onCreate();
   MobileAds.initialize(this, "YOUR-ADMOB-ID"); <-- ADD this line
}
```
Now, in your AndroidManifest.xml, perform the following changes.

```python
<application>
  <meta-data
        android:name="com.google.android.gms.ads.APPLICATION_ID"
        android:value="YOUR-ADMOB-ID"/>
</application>
```
You need to create an account in [Google Admob](https://www.google.com/admob/) to get your Admob ID.

Also, add below line in /app/build.gradle file:

```python
implementation 'com.google.android.gms:play-services-ads:15.0.0'
```
An example of the Admob Ad units is given in the src folder of this repository.

 1) Banner Ad
 2) Interstitial Ad
 3) Interstitial Video Ad
 4) Rewarded Video Ad

You can use Test Admob Ad Units from [this link](https://developers.google.com/admob/android/test-ads#sample_ad_units). Please make sure to update tests as appropriate.
