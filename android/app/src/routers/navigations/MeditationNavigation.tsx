import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeditationScreen from '../../screens/MeditationScreen';

const MeditationNavigation = () => {
    const MeditationStack = createNativeStackNavigator();
    return (
      <MeditationStack.Navigator screenOptions={{headerShown:false}}>
          <MeditationStack.Screen name='MeditationScreen' component={MeditationScreen}/>
  
  
      </MeditationStack.Navigator>
    );
}

export default MeditationNavigation