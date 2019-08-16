import React from 'react';
import { Image, PanResponder, View } from 'react-native';
import PropTypes from 'prop-types';

import brightnessIcon from '../../images/brightness.png';
import volumeIcon from '../../images/volume.png';
import styles from './styles';

const propTypes = {
  icon: PropTypes.string.isRequired,
};

export default class VerticalSlider extends React.PureComponent {
  slider = React.createRef();

  handleGesture = event => {
    this.slider.current.setNativeProps({
      style: {
        top: event.nativeEvent.locationY,
      },
    });
  };

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderStart: this.handleGesture,
    onPanResponderMove: this.handleGesture,
  });

  render() {
    const icon = {
      brightness: brightnessIcon,
      volume: volumeIcon,
    }[this.props.icon];

    return (
      <View style={styles.sliderBlock} {...this.panResponder.panHandlers}>
        <Image
          pointerEvents="none"
          resizeMode="contain"
          source={icon}
          style={styles.icon}
        />
        <View pointerEvents="none" ref={this.slider} style={styles.slider} />
      </View>
    );
  }
}

VerticalSlider.prototypes = propTypes;
