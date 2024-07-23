import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import React, { useState } from 'react'
import TextInputCustom from '../components/TextInputCustom';

const ForgotPasswordScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isEmailVerified, setIsEmailVerified] = useState(false);


    const handleVerifyEmail = async () => {
        if (email === '') {
          Alert.alert('Error', 'Please enter your email');
          return;
        }
    
        try {
          const usersSnapshot = await firestore().collection('user').where('email', '==', email).get();
          if (usersSnapshot.empty) {
            Alert.alert('Error', 'Email not found');
            return;
          }
          setIsEmailVerified(true);
          
        } catch (error) {
          console.error('Error verifying email: ', error);
          Alert.alert('Error', 'An error occurred. Please try again.');
        }
      };
      const handleChangePassword = async () => {
        if (newPassword === '') {
          Alert.alert('Error', 'Please enter your new password');
          return;
        }
    
        try {
          const userRef = await firestore().collection('user').where('email', '==', email).get();
          const userId = userRef.docs[0].id;
          await firestore().collection('user').doc(userId).update({ passwordHash: newPassword });
          Alert.alert('Success', 'Password changed successfully');
          navigation.navigate('LoginScreen');
        } catch (error) {
          console.error('Error changing password: ', error);
          Alert.alert('Error', 'An error occurred. Please try again.');
        }
      };
  return (
    <View style={{flex:1,backgroundColor:'white',padding:20}}>

    <TouchableOpacity style={{alignSelf:'flex-end',marginEnd:0,marginTop:20}} onPress={()=>navigation.navigate('LoginScreen')}>
        <Image source={require('../img/exit.png')} style={{width:30,height:30}}/>
      </TouchableOpacity>
      <Text style={{fontSize:30,fontWeight:'bold',color:'black',marginBottom:10}}>Logn in to App</Text>

      <TextInputCustom lable={'Email'} placeholder="Enter Email"   
      value={email}
      onChangeText={setEmail}
      autoCapitalize="none"
      editable={!isEmailVerified}/>

      <TouchableOpacity style={st.bt} onPress={handleVerifyEmail} disabled={isEmailVerified}>
        <Text style={{color:'white',fontSize:13,fontWeight:'600'}}>Verify</Text>
      </TouchableOpacity>

      {isEmailVerified && (
        <>
          <TextInputCustom lable={'New Password of '+email} placeholder="Enter New Password"   
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry/>
        <TouchableOpacity style={st.bt} onPress={handleChangePassword}>
        <Text style={{color:'white',fontSize:13,fontWeight:'600'}}>Change Password</Text>
      </TouchableOpacity>
        
        </>
      )}



    </View>
  )
}

export default ForgotPasswordScreen

const st = StyleSheet.create({
    bt:{
      alignItems:'center',
      justifyContent:'center',marginTop:20,width:'100%',backgroundColor:'red',padding:15,borderRadius:10
    }
  })