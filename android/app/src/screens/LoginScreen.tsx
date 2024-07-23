import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import TextInputCustom from '../components/TextInputCustom'
import firestore from '@react-native-firebase/firestore';
import { useUser } from '../components/UserContext';
import auth from '@react-native-firebase/auth';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const { setUserId } = useUser();

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

  const handleLogin = async () => {
    
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    if (!validateInputs()) return;
    try {
      // const usersSnapshot = await firestore().collection('user').where('email', '==', email).get();
      // if (usersSnapshot.empty) {
      //   Alert.alert('Error', 'Invalid email or password');
      //   return;
      // }

      // const user = usersSnapshot.docs[0].data();
      // if (user.passwordHash === password) {  // Trong thực tế, bạn nên băm mật khẩu và so sánh
      //   navigation.navigate('Home');
      // } else {
      //   Alert.alert('Error', 'Invalid email or password');
      // }
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;
      setUserId(userId);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error checking user: ', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={{flex:1,backgroundColor:'white',padding:20}}>
      <TouchableOpacity style={{alignSelf:'flex-end',marginEnd:0,marginTop:20}} onPress={()=>navigation.navigate('WelcomeScreen')}>
        <Image source={require('../img/exit.png')} style={{width:30,height:30}}/>
      </TouchableOpacity>
      <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginBottom:10}}>Logn in to App</Text>

      <TextInputCustom lable={'Email'} placeholder="Enter Email"    value={email}
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
        onChangeText={setPassword}  secureTextEntry={!showPassword}/>
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPasswordScreen')}>

          <Text style={{fontSize:10,textDecorationLine:'underline',marginTop:5,color:'red'}}>Forgot Password</Text>
        </TouchableOpacity>
       
      </View>

      <TouchableOpacity style={st.bt} onPress={handleLogin}>
        <Text style={{color:'white',fontSize:13,fontWeight:'600'}}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',marginVertical:20}}>
        <Text style={{backgroundColor:'gray',width:'45%',height:0.8,marginTop:10}}></Text>
        <Text style={{marginHorizontal:10}}>or</Text>
        <Text style={{backgroundColor:'gray',width:'45%',height:0.8,marginTop:10}}></Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('SigninScreen')} style={{alignItems:'center',
    justifyContent:'center',marginTop:10,width:'100%',backgroundColor:'white',padding:15,borderRadius:10,borderWidth:1,borderColor:'#D9D9D9'}}>
        <Text style={{color:'black',fontSize:12,fontWeight:'600'}}>Continue with Google</Text>
        <TouchableOpacity style={{position:'absolute',left:10}}>

          <Image source={require('../img/google.png')} style={{width:17,height:17}}/>
        </TouchableOpacity>
        
      </TouchableOpacity>
    

     
      
    </View>
  )
}

export default LoginScreen

const st = StyleSheet.create({
  bt:{
    alignItems:'center',
    justifyContent:'center',marginTop:20,width:'100%',backgroundColor:'#F46D21',padding:15,borderRadius:10
  }
})