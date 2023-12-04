import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing} from 'react-native';
import IconDashboard from 'react-native-vector-icons/MaterialIcons';

const SpinningLogo = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    spin();
  }, []);

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };

  const spinInterpolate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          transform: [{rotate: spinInterpolate}],
        }}>
        <IconDashboard name="dashboard" size={50} color="blue" />
      </Animated.View>
    </View>
  );
};

export default SpinningLogo;
