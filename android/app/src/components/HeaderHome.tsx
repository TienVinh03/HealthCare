import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  subtitle: string;

}

const HeaderHome: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text></Text>
        <Text></Text>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical:30,
    backgroundColor: '#C9E3C9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom:5
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',color:'black'
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default HeaderHome;
