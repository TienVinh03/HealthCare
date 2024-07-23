import { View, Text, StyleSheet,Image, ScrollView } from 'react-native'
import React from 'react'
import HeaderHome from '../components/HeaderHome'
import SectionHome from '../components/SectionHome'

import LottieView from "lottie-react-native";
import Section from '../components/Section';


const Home = () => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <HeaderHome title='Health' subtitle='Every steps count'/>
      <SectionHome kcal={'450'} kcal_goal={'600'} step={'8000'} step_goal={'12000'}
      iconSource={require('../img/circle.png')}
      />
        <LottieView
      source={require("../assets/cycling.json")}
      style={{width: 210, height: 300,position:'absolute',right:5,top:-30}}
      autoPlay
      loop
    />
    <ScrollView>


    
    <View style={{width:'100%',flexDirection:'row'}}>
    <Section title={'Sleep'} icon={require('../img/bed.png')} amount={'6h 30p'} date={'July 23'}>
    <View>
      <Text>VTV</Text>
    </View>
    </Section>

    <Section title={'Steps'} icon={require('../img/shoe.png')} amount={'8000 steps'} date={'July 23'}>
    <View>
      <Text>VTV</Text>
    </View>
    </Section>
    
    </View>
    <View style={{width:'100%',flexDirection:'row'}}>
    <Section title={'Kcals'} icon={require('../img/kcal.png')} amount={'300 Kcal'} date={'July 23'}>
    <View>
      <Text>VTV</Text>
    </View>
    </Section>

    <Section title={'Moving'} icon={require('../img/moving.png')} amount={'0,3 km'} date={'July 23'}>
    <View>
      <Text>VTV</Text>
    </View>
    </Section>
    
    </View>

   
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Image source={require('../img/meditation.png')} style={{width:30,height:30}}/>
      <Text style={{fontSize:15,color:'black',fontWeight:'600',marginLeft:10,marginTop:3}}>Boost your concentration</Text>
      </View>
      
    </View>
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Image source={require('../img/diet.png')} style={{width:30,height:30}}/>
      <Text style={{fontSize:15,color:'black',fontWeight:'600',marginLeft:10,marginTop:3}}>Follow your diet</Text>
      </View>
      
    </View>



 </ScrollView>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
      marginVertical: 7,
      padding: 15,
      backgroundColor: '#F46D21',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
      width: '97%',marginHorizontal:5


  },})