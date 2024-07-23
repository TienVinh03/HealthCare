import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const TrainingScreen = () => {
  return (
    <View style={{flex:1}}>
    <Header title='Training' subtitle='Boost your muscle' iconSource={require('../img/setting.png')}/>
  </View>
  )
}

export default TrainingScreen