import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrainingScreen from '../../screens/TrainingScreen';

const TrainingNavigation = () => {
    const TrainingStack = createNativeStackNavigator();
    return (
      <TrainingStack.Navigator screenOptions={{headerShown:false}}>
          <TrainingStack.Screen name='TrainingScreen' component={TrainingScreen}/>
  
  
      </TrainingStack.Navigator>
    );
}

export default TrainingNavigation