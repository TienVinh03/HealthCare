import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import StatusScreen from '../../screens/StatusScreen';

const StatusNavigations = () => {

    const StatusStack = createNativeStackNavigator();
  return (
    <StatusStack.Navigator screenOptions={{headerShown:false}}>
        <StatusStack.Screen name='StatusScreen' component={StatusScreen}/>


    </StatusStack.Navigator>
  );
}

export default StatusNavigations