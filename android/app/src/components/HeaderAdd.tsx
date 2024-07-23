import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowLeft, Back, Home, More, Setting2, Speedometer, Status, Thorchain, User } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
}

const HeaderAdd: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowLeft size={30} color={'black'} style={{marginRight:20}}/>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal:10,
    backgroundColor: '#fff', // Adjust the background color as needed
    elevation: 4, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 2, // For iOS shadow
  },
  icon: {
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',color:'black'
  },
});

export default HeaderAdd;
