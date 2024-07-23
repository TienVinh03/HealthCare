// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import LoginScreen from './screens/LoginScreen';
// import SigninScreen from './screens/SigninScreen';
// import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
// import WelcomeScreen from './screens/WelcomeScreen';
// import HomeScreen from './screens/Home';
// import TrainingScreen from './screens/TrainingScreen';
// import InfoScreen from './screens/InfoScreen';
// import StatusScreen from './screens/StatusScreen';
// import MeditationScreen from './screens/MeditationScreen';
// import { Image, StyleSheet } from 'react-native';
// import AddStatus from './screens/AddStatus';

// const icons = {
//     HomeScreen: require('./img/home1.png'),
//     TrainingScreen: require('./img/home1.png'),
//     StatusScreen: require('./img/home1.png'),
//     MeditationScreen: require('./img/home1.png'),
//     InfoScreen: require('./img/home1.png'),
    
//   };

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const HomeTabNavigator = () => (
//   <Tab.Navigator   screenOptions={({ route }) => ({
//     tabBarIcon: ({ focused }) => {
//       const icon = icons[route.name as keyof typeof icons];
//       return (
//         <Image
//           source={icon}
//           style={[
//             styles.icon,
//             { tintColor: focused ? 'aqua' : 'gray' },
//           ]}
//         />
//       );
//     },
//     tabBarActiveTintColor: '#42a5f5',
//     tabBarInactiveTintColor: 'red',
//     tabBarStyle: {
//       backgroundColor: 'white',
//       paddingBottom: 5,
//       height:65,borderRadius:20
//       ,marginHorizontal:5,marginBottom:5,borderTopColor: 'transparent',position:'absolute'
//     },
//     headerShown: false
//   })}>
//     <Tab.Screen name="HomeScreen" component={HomeScreen} />
//     <Tab.Screen name="TrainingScreen" component={TrainingScreen} />
//     <Tab.Screen name="StatusScreen" component={StatusScreen} />
//     <Tab.Screen name="MeditationScreen" component={MeditationScreen} />
//     <Tab.Screen name="InfoScreen" component={InfoScreen} />
    
//   </Tab.Navigator>
// );

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
//         <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//         <Stack.Screen name="SigninScreen" component={SigninScreen} />
//         <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
//         <Stack.Screen name="AddStatus" component={AddStatus} />
//         <Stack.Screen name="Home" component={HomeTabNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;
// const styles = StyleSheet.create({
//     icon: {
//       width: 20,
//       height: 20,
//     },
//   });