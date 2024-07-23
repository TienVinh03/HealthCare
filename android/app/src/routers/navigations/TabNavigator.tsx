import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import { FolderCloud, Home, More, Setting2, Speedometer, Status, Thorchain, Trade, User } from 'iconsax-react-native';
import StatusScreen from '../../screens/StatusScreen';
import TrainingScreen from '../../screens/TrainingScreen';
import MeditationScreen from '../../screens/MeditationScreen';
import StatusNavigations from './StatusNavigations';
import TrainingNavigation from './TrainingNavigation';
import MeditationNavigation from './MeditationNavigation';
import InfoNavigations from './InfoNavigations';
import RowComponent from '../../components/RowComponent';
import { styles } from '../../styles/gobal';
import WelcomeScreen from '../../screens/WelcomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import SigninScreen from '../../screens/SigninScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import AddStatus from '../../screens/AddStatus';
import InfoScreen from '../../screens/InfoScreen';
  const Stack = createNativeStackNavigator();
   const Tabs = createBottomTabNavigator();
const TabNavigator = () => (
    <Tabs.Navigator
    screenOptions={({route})=>(
{
  headerShown:false,
  tabBarShowLabel:false,
  tabBarStyle:{
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:9,height:70,paddingHorizontal:5
  }
  ,
  tabBarIcon:({focused,color,size})=>{
    size = 20
    if(route.name === 'HomeStack'){
      return ( 
        <RowComponent localstyles={{
          backgroundColor:focused?'aqua':'#fff',marginBottom:7
        }} >

          <Home size={size} color={focused?'coral':'#9C69DC'}/>{
            focused && <Text style={[styles.tabLabel]}>Home</Text>
          }
        </RowComponent>
    );
    }else if(route.name =='StatusNavigations'){
      return (
        <RowComponent localstyles={{
          backgroundColor:focused?'aqua':'#fff',marginBottom:7
        }}>

<Thorchain size={size} color={focused?'coral':'#9C69DC'}/>{
          focused && <Text style={[styles.tabLabel]}>Status</Text>
        }
      </RowComponent>
      
    );
    }else if(route.name =='TrainingNavigation'){
      return (
      

      <RowComponent localstyles={{
        backgroundColor:focused?'aqua':'#fff',marginBottom:7
      }}>

<Speedometer size={size} color={focused?'coral':'#9C69DC'}/>{
          focused && <Text style={[styles.tabLabel]}>Track</Text>
        }
      </RowComponent>
    
    );
    }
    else if(route.name =='MeditationNavigation'){
      return (
      

      <RowComponent localstyles={{
        backgroundColor:focused?'aqua':'#fff',marginBottom:7
      }}>

<Trade size={size} color={focused?'coral':'#9C69DC'}/>{
          focused && <Text style={[styles.tabLabel]}>Focus</Text>
        }
      </RowComponent>
    
    );
    }else{
      return (
        <RowComponent localstyles={{
          backgroundColor:focused?'aqua':'#fff',marginBottom:7
        }}>

        <User size={size} color={focused?'coral':'#9C69DC'}/>{
                  focused && <Text style={[styles.tabLabel]}>  Info</Text>
                }
              </RowComponent>
    
    );
    }
  }
}
    )

    }>
       <Tabs.Screen name='HomeStack' component={HomeNavigation} options={{headerTitle:'Home'}}/>
       <Tabs.Screen name='StatusNavigations' component={StatusNavigations} options={{headerTitle:'Staus'}}/>
       <Tabs.Screen name='TrainingNavigation' component={TrainingNavigation} options={{headerTitle:'Tracking'}}/>
       <Tabs.Screen name='MeditationNavigation' component={MeditationNavigation} options={{headerTitle:'Meditation'}}/>
       <Tabs.Screen name='InfoNavigations' component={InfoNavigations} options={{headerTitle:'Info'}}/>
      
       

    </Tabs.Navigator>

  
   

  )

const AppNavigator1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="AddStatus" component={AddStatus} />
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default AppNavigator1