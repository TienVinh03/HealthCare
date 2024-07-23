import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { styles } from '../styles/gobal';

interface Props{
    children: any,
    localstyles?: StyleProp<ViewStyle>;
}
const RowComponent = (props:Props) => {
    const {children,localstyles}=props;
  return (
    <View 
    style={[
        localstyles,styles.tabBarContainer, {
        flexDirection:'row',paddingHorizontal:10,
        paddingVertical:17
    },
    ]}>
      {children}
    </View>
  )
}

export default RowComponent