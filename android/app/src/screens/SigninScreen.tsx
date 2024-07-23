import { View, Text, StyleSheet, TouchableOpacity, Image,Alert } from 'react-native'
import React, { useState } from 'react'
import TextInputCustom from '../components/TextInputCustom'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SigninScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Invalid email format');
      return false;
    }
    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long');
      return false;
    }
    return true;
  };

  const handleSignin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Please enter both email and password');
      return;
    }
    if(!validateInputs()) return;

    try {
      // const usersSnapshot = await firestore().collection('user').where('email', '==', email).get();
      // if (!usersSnapshot.empty) {
      //   Alert.alert('Error', 'Email already exists. Please use a different email.');
      //   return;
      // }
      // const newUser = {
      //   email: email,
      //   passwordHash: password, // Trong thực tế, bạn nên băm mật khẩu trước khi lưu trữ
      //   gender: '',
      //   height: 0,
      //   weight: 0,
      //   bmi: 0,
      //   name:''
      // };

      // await firestore().collection('user').add(newUser);

      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;
      
      await firestore().collection('user').doc(userId).set({
        email,
        gender: '',
        height: 0,
        weight: 0,
        bmi: 0,
        dateOfBirth: '',
      });
      Alert.alert('User signed in successfully!');
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error adding user: ', error);
      Alert.alert('Error signing in, please try again.');
    }
  };
  return (
    <View style={{flex:1,backgroundColor:'white',padding:20}}>
      <TouchableOpacity style={{alignSelf:'flex-end',marginEnd:0,marginTop:20}} onPress={()=>navigation.navigate('WelcomeScreen')}>
        <Image source={require('../img/exit.png')} style={{width:30,height:30}}/>
      </TouchableOpacity>
      <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginBottom:10}}>Create an Account</Text>

      <TextInputCustom lable={'Email'} placeholder="Enter Email"  value={email}
        onChangeText={setEmail}/>
      <View style={{width:'100%'}}>
      <TouchableOpacity style={{position:'absolute',top:80,right:20,zIndex:1000}} onPress={()=>setShowPassword(!showPassword)}>
          {
            showPassword?
            <Image source={require('../img/eye_hide.png')} style={{width:20,height:20}}/>:
            <Image source={require('../img/eye_show.png')} style={{width:20,height:20}}/>
          }
          
        </TouchableOpacity>
       <TextInputCustom lable={'Password'} placeholder="Enter PassWord" value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}/>
    
      </View>

      <TouchableOpacity style={st.bt} onPress={handleSignin}>
        <Text style={{color:'white',fontSize:13,fontWeight:'600'}}>Sign in</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',marginVertical:20}}>
        <Text style={{backgroundColor:'gray',width:'45%',height:0.8,marginTop:10}}></Text>
        <Text style={{marginHorizontal:10}}>or</Text>
        <Text style={{backgroundColor:'gray',width:'45%',height:0.8,marginTop:10}}></Text>
      </View>
      <TouchableOpacity style={{alignItems:'center',
    justifyContent:'center',marginTop:10,width:'100%',backgroundColor:'white',padding:15,borderRadius:10,borderWidth:1,borderColor:'#D9D9D9'}}>
        <Text style={{color:'black',fontSize:12,fontWeight:'600'}}>Continue with Google</Text>
        <TouchableOpacity style={{position:'absolute',left:10}}>

          <Image source={require('../img/google.png')} style={{width:17,height:17}}/>
        </TouchableOpacity>
        
      </TouchableOpacity>
    

     
      
    </View>
  )
}

export default SigninScreen
const st = StyleSheet.create({
  bt:{
    alignItems:'center',
    justifyContent:'center',marginTop:20,width:'100%',backgroundColor:'#F46D21',padding:15,borderRadius:10
  }
})


