import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './android/app/src/screens/WelcomeScreen';
import LoginScreen from './android/app/src/screens/LoginScreen';
import SigninScreen from './android/app/src/screens/SigninScreen';
import Home from './android/app/src/screens/Home';
import ForgotPasswordScreen from './android/app/src/screens/ForgotPasswordScreen';
import AppNavigator from './android/app/src/AppNavigator';
const Stack = createStackNavigator();

import { Provider } from 'react-redux'
import store from './android/app/src/redux/store'
import TabNavigation from './android/app/src/routers/navigations/TabNavigator';
import TabNavigator from './android/app/src/routers/navigations/TabNavigator';
import AppNavigator1 from './android/app/src/routers/navigations/TabNavigator';


const App = () => {
  return (
  //   <NavigationContainer>
  //   <Stack.Navigator initialRouteName="SigninScreen" screenOptions={{headerShown:false}}>
  //   <Stack.Screen name="Home" component={Home} />
  //     <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
  //     <Stack.Screen name="LoginScreen" component={LoginScreen} />
  //     <Stack.Screen name="SigninScreen" component={SigninScreen} />
  //     <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
  //   </Stack.Navigator>
  // </NavigationContainer>
  <Provider store={store}>

    <View style={{flex:1,backgroundColor:'white'}}>
      {/* <AppNavigator/> */}
      {/* <TabNavigator/> */}
      <AppNavigator1/>
  </View>
  </Provider>
  
  )
}

export default App