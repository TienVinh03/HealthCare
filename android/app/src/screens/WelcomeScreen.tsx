import { View, Text, Button, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LoginScreen from './LoginScreen';
import SigninScreen from './SigninScreen';
import Swiper from 'react-native-swiper';

const { width: screenWidth } = Dimensions.get('window');
// const SLIDES = [
//   { id: 1, image: require('../img/slideshow1.png'), title: 'Slide 1' },
//   { id: 2, image: require('../img/slide1.png'), title: 'Slide 2' },
//   { id: 3, image: require('../img/slideshow3.jpg'), title: 'Slide 3' },
//   { id: 4, image: require('../img/slideshow4.jpg'), title: 'Slide 4' },
//   { id: 5, image: require('../img/slideshow5.jpg'), title: 'Slide 5' },
// ];
const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
    <Swiper style={styles.wrapper} showsButtons={true} loop={true} autoplay={true}  nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}>
    <View style={styles.slide1}>
      <Image source={require('../img/slideshow1.png')} style={{width:screenWidth,height:450,alignSelf:'center'}}/>
      <Text style={styles.text}>Make your motivation from people</Text>
    </View>
    <View style={styles.slide2}>
    <Image source={require('../img/slideshow2.png')} style={{width:screenWidth,height:450,alignSelf:'center'}}/>
      <Text style={styles.text}>Track your progress and activities</Text>
    </View>
    <View style={styles.slide3}>
    <Image source={require('../img/slideshow3.png')} style={{width:screenWidth,height:450,alignSelf:'center'}}/>
      <Text style={styles.text}>Immerse your self in the nature</Text>
    </View>
    <View style={styles.slide3}>
    <Image source={require('../img/slideshow4.png')} style={{width:screenWidth,height:450,alignSelf:'center'}}/>
      <Text style={styles.text}>Try your best to reach your goals</Text>
    </View>
    <View style={styles.slide3}>
    <Image source={require('../img/slideshow6.png')} style={{width:screenWidth,height:450,alignSelf:'center'}}/>
      <Text style={styles.text}>Be peaceful and calm</Text>
    </View>
  </Swiper>
  <TouchableOpacity style={styles.bt} onPress={()=>navigation.navigate('SigninScreen')} >
        <Text style={{color:'white',fontSize:13,fontWeight:'600'}}>Create a account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')} style={{alignItems:'center',
    justifyContent:'center',marginTop:10,width:400,backgroundColor:'white',padding:15,borderRadius:0,borderWidth:1,borderColor:'#D9D9D9',marginHorizontal:6,marginBottom:10}} >
        <Text style={{color:'black',fontSize:13,fontWeight:'600'}}>Login</Text>
      </TouchableOpacity>
  </View>
  )
}

export default WelcomeScreen
const styles = StyleSheet.create({
  wrapper: {},
  bt:{
    alignItems:'center',
    justifyContent:'center',marginTop:20,width:400,backgroundColor:'#F46D21',padding:15,borderRadius:0,marginHorizontal:6
  },
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide2: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide3: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400'
    ,marginTop:20
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#000',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  paginationStyle: {
    bottom: 70,
  },
  buttonText: {
    color: 'gray',
    fontSize: 30,
  },
})