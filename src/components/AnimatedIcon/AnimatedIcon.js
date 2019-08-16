import React from 'react';
import { Animated, Image, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import orientationIcon from '../../images/orientation.png';
import nightModeIcon from '../../images/nightMode.png';
import lighterIcon from '../../images/lighter.png';
import timerIcon from '../../images/timer.png';
import calculatorIcon from '../../images/calculator.png';
import cameraIcon from '../../images/camera.png';
import { horizontalUnits } from '../../utils/scaling';
import colors from '../../utils/colors';
import styles from './styles';

const propTypes = {
  icon: PropTypes.string.isRequired,
  isToggled: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
};

function AnimatedIcon(props) {
  const [animatedValue] = React.useState(new Animated.Value(0));

  function animate(toValue) {
    Animated.timing(animatedValue, {
      duration: 200,
      useNativeDriver: true,
      toValue,
    }).start();
  }

  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });

  const icon = {
    orientation: orientationIcon,
    nightMode: nightModeIcon,
    lighter: lighterIcon,
    timer: timerIcon,
    calculator: calculatorIcon,
    camera: cameraIcon,
  }[props.icon];

  return (
    <TouchableWithoutFeedback
      onPressIn={() => animate(1)}
      onPressOut={() => animate(0)}
      onPress={() => props.onPress(!props.isToggled)}
    >
      <Animated.View
        style={[
          styles.iconBlock,
          {
            backgroundColor: props.isToggled
              ? colors.white
              : colors.blackBackground,
            transform: [{ scale }],
          },
        ]}
      >
        <Image
          resizeMode="contain"
          source={icon}
          style={{
            width: props.size || horizontalUnits(32),
            height: props.size || horizontalUnits(32),
            tintColor: props.isToggled ? colors.blue : colors.white,
          }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

AnimatedIcon.propTypes = propTypes;
export default React.memo(AnimatedIcon);
