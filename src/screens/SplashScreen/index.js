import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashLogo from '../../images/splash_logo.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashScreen = ({navigation}) => {
  setTimeout(async () => {
    const login = await AsyncStorage.getItem('isLoggedIn');
    if (login) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  }, 2000);
  return (
    <View style={styles.Container}>
      <StatusBar barStyle={'light-content'} />
      <SplashLogo />
      {/* local */}
      {/* statuss */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000001A',
  },
});
