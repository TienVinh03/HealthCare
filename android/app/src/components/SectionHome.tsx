import { Home } from 'iconsax-react-native';
import React from 'react';
import { View, Text, Image, StyleSheet, Keyboard } from 'react-native';
import { Icon } from 'react-native-paper';

interface HeaderProps {
  kcal: String;
  step: String;
  iconSource:any;
  step_goal:String;
  kcal_goal:String;
}

const SectionHome: React.FC<HeaderProps> = ({ kcal, step,iconSource,step_goal,kcal_goal}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <View style={{flexDirection:'row'}}>
        <Image source={require('../img/fire.png')} style={{width:20,height:20}}/>
          <Text style={styles.title}>{kcal} / {kcal_goal} kcal</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:20}}>
        <Image source={require('../img/shoe.png')} style={{width:20,height:20}}/>
        
           <Text style={styles.title}>{step} / {step_goal} steps</Text>
        </View>
       
       
      </View>
      <Image source={iconSource} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position:'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical:39,
    backgroundColor: 'white',
    borderBottomWidth: 0,
    borderBottomColor: '#ddd',
    marginBottom:5,marginHorizontal:5
    ,borderRadius:10,shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 2.22,
    elevation: 8,height:150
    ,marginTop:-60
  },
  textContainer: {
    flex: 1,marginLeft:60,marginTop:-60
  },
  title: {
    fontSize: 10,
    fontWeight: '500',color:'black',marginLeft:5
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  icon: {
    width: 120,
    height: 140,position:'absolute',top:5,left:0
  },
});

export default SectionHome;
