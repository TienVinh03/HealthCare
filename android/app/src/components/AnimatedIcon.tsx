import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

const AnimatedIcon = () => {
  const translateXValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const screenWidth = Dimensions.get('window').width;
    Animated.loop(
      Animated.timing(translateXValue, {
        toValue: screenWidth -20, // Subtract icon width (assuming icon width is 50)
        duration: 1000, // Set a long duration for a slow animation (20 seconds)
        useNativeDriver: true,
      })
    ).start();
  }, [translateXValue]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../img/training.png')} // Replace with your icon URL
        style={[styles.icon, { transform: [{ translateX: translateXValue }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the start for the animation
    position:'absolute',top:40,left:-160
  },
  icon: {
    width: 150,
    height: 200,
  },
});

export default AnimatedIcon;
