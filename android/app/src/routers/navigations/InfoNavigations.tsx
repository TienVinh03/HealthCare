import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InfoScreen from '../../screens/InfoScreen';

const InfoNavigations = () => {

    const InfoStack = createNativeStackNavigator();
  return (
    <InfoStack.Navigator screenOptions={{headerShown:false}}>
        <InfoStack.Screen name='InfoScreen' component={InfoScreen}/>


    </InfoStack.Navigator>
  )
}

export default InfoNavigations