import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../../screens/LoginScreen';
import SigninScreen from '../../screens/SigninScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';
import HomeScreen from '../../screens//Home';
import TrainingScreen from '../../screens/TrainingScreen';
import InfoScreen from '../../screens/InfoScreen';
import StatusScreen from '../../screens/StatusScreen';
import MeditationScreen from '../../screens/MeditationScreen';
import { Image, StyleSheet } from 'react-native';
import AddStatus from '../../screens/AddStatus';
import Home from '../../screens//Home';

const HomeNavigation = () => {

    const HomeStack = createNativeStackNavigator();
    return (
      <HomeStack.Navigator screenOptions={{headerShown:false}}>
          <HomeStack.Screen name='Home' component={Home}/>
  
  
      </HomeStack.Navigator>
    )
}

export default HomeNavigation