import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const MeditationScreen = () => {
  return (
    <View style={{flex:1}}>
    <Header title='Meditation and Yoga' subtitle='Immerse yourself in peace' iconSource={require('../img/setting.png')}/>
  </View>
  )
}

export default MeditationScreen