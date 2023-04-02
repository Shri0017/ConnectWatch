import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import Home from './src/screens/Home';

export default function Navigator() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="splash" component={SplashScreen} />
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
