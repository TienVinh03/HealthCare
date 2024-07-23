
import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const InfoScreen = () => {
  return (
    <View style={{flex:1}}>
      <Header title='Profile' subtitle='Check your BMI' iconSource={require('../img/setting.png')}/>
    </View>
  )
}

export default InfoScreen